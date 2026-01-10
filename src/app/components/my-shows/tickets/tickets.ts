import { Component } from '@angular/core';
import { ITicket } from '../../../domain/ticket.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tickets',
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {

  tickets: ITicket[] = [{
    id: '1',
    band: 'Guns N Roses',
    data: '25 de Outubro de 2025',
    local: 'Allianz Parque - SP',
    imagem: 'https://tse4.mm.bing.net/th/id/OIP.4V0efdpKZn02SCON5FpUxAHaEG?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '2',
    band: 'Imagine Dragons',
    data: '31 de Outubro de 2025',
    local: 'MorumBIS - SP',
    imagem: 'https://th.bing.com/th/id/R.d004ffb4e5c8b938e752148a5cc34d52?rik=a9b5xwaWaNx7Ug&riu=http%3a%2f%2fdigitalspyuk.cdnds.net%2f14%2f15%2f1600x800%2flandscape_music-imagine-dragons.jpg&ehk=Y%2bHhzE0c9fCKQWBdat6bNCCQwKdTcMjpifjvjBH6Tqs%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: '3',
    band: 'Humberto Gessinger',
    data: '11 de Outubro de 2025',
    local: 'Espaço Unimed - SP',
    imagem: 'https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2016/11/humberto-gessinger-1.jpg'
  },
  {
    id: '4',
    band: 'Humberto Gessinger',
    data: '02 de Fevereiro de 2025',
    local: 'Tokio Marine Hall - SP',
    imagem: 'https://cdn.topmidianews.com.br/img/pc/620/320/dn_noticia/2016/11/humberto-gessinger-1.jpg'
  },
  {
    id: '5',
    band: 'Bangers Open Air',
    data: '04 de Maio de 2025',
    local: 'Memorial América Latina - SP',
    imagem: 'https://tse3.mm.bing.net/th/id/OIP.idX8L0JcWFBejJP3wtN4lQHaD4?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: '6',
    band: 'Avenged Sevenfold',
    data: '31 de Janeiro de 2026',
    local: 'Allianz Parque - SP',
    imagem: 'https://tse4.mm.bing.net/th/id/OIP.Vc_6Kbl4Dq7jRHy6crHuAgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3'
  }];

}
