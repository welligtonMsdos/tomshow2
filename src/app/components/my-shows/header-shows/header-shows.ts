import { Component, signal } from '@angular/core';
import { TicketService } from '../../../service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-shows',
  imports: [CommonModule],
  templateUrl: './header-shows.html',
  styleUrl: './header-shows.css',
})
export class HeaderShows {

  activeTab = signal<'upcoming' | 'past'>('upcoming');

  constructor(public ticketService: TicketService) {}

  setTab(tab: 'upcoming' | 'past') {
    this.ticketService.updateFilter(tab);
  }

  create(){
    alert('Create Show clicked!');
  }



}
