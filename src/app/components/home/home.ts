import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public loginService = inject(LoginService);

}
