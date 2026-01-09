import { effect, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode = signal<boolean>(
    localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  constructor() {
    // Effect: sempre que o signal darkMode mudar, ele atualiza o HTML e o localStorage
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

  toggleTheme() {
    this.darkMode.update(val => !val);
  }

}
