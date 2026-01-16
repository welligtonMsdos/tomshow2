import { Component } from '@angular/core';
import { ListVinil } from './list-vinil/list-vinil';
import { HeaderVinil } from './header-vinil/header-vinil';

@Component({
  selector: 'app-vinil',
  imports: [ListVinil, HeaderVinil],
  templateUrl: './vinil.html',
  styleUrl: './vinil.css',
})
export class Vinil {

}
