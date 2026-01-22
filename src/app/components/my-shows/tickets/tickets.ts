import { Component } from '@angular/core';
import { ITicket } from '../../../domain/ticket.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ShowDto } from '../../../domain/show.model';
import { CollectionService } from '../../../service/collection.service';
import { TicketService } from '../../../service/ticket.service';

@Component({
  selector: 'app-tickets',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {

  tickets: ShowDto[] = [];
    isLoading = true;

    constructor(public ticketService: TicketService) {}

}
