import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../service/themeService.service';

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

}
