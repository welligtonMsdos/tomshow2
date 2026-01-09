import { Component } from '@angular/core';
import { HeaderShows } from "./header-shows/header-shows";
import { Tickets } from "./tickets/tickets";

@Component({
  selector: 'app-my-shows',
  imports: [HeaderShows, Tickets],
  templateUrl: './my-shows.html',
  styleUrl: './my-shows.css',
})
export class MyShows {

}
