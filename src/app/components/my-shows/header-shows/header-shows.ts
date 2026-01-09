import { Component } from '@angular/core';

@Component({
  selector: 'app-header-shows',
  imports: [],
  templateUrl: './header-shows.html',
  styleUrl: './header-shows.css',
})
export class HeaderShows {

  create(){
    alert('Create Show clicked!');
  }

}
