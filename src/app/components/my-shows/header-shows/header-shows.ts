import { Component, inject, signal } from '@angular/core';
import { TicketService } from '../../../service/ticket.service';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../service/alert.service';

@Component({
  selector: 'app-header-shows',
  imports: [CommonModule],
  templateUrl: './header-shows.html',
  styleUrl: './header-shows.css',
})
export class HeaderShows {

  activeTab = signal<'upcoming' | 'past'>('upcoming');

  private alert = inject(AlertService);

  constructor(public ticketService: TicketService) {}

  setTab(tab: 'upcoming' | 'past') {
    this.ticketService.updateFilter(tab);
  }

  create(){
    this.alert.showSuccess('Show criado com sucesso!');
  }

}
