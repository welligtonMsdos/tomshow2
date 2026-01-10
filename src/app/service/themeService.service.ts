import { effect, Injectable, signal, PLATFORM_ID, inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private platformId = inject(PLATFORM_ID);

  darkMode = signal<boolean>(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Inicializa apenas no navegador
      const savedTheme = localStorage.getItem('theme');
      this.darkMode.set(
        savedTheme === 'dark' ||
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );

      effect(() => {
        const isDark = this.darkMode();
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  toggleTheme() {
    this.darkMode.update(val => !val);
  }

}
