import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../service/themeService.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule,
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
            RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  themeService = inject(ThemeService);

  loginService = inject(LoginService);

  constructor(private router: Router) {}

  logout() {
    this.loginService.logout();

    this.router.navigate(['/home']);
  }

}
