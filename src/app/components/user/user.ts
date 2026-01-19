import { Component } from '@angular/core';
import { HeaderUser } from "./header-user/header-user";
import { ListUser } from "./list-user/list-user";

@Component({
  selector: 'app-user',
  imports: [HeaderUser, ListUser],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

}
