import { Component, OnInit } from '@angular/core';
import { VinilDto } from '../../../domain/vinil.model';
import { VinilService } from '../../../service/vinil.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-list-vinil',
  imports: [CurrencyPipe],
  templateUrl: './list-vinil.html',
  styleUrl: './list-vinil.css',
})
export class ListVinil implements OnInit{

  vinis: VinilDto[] = [];
  isLoading = true;

  constructor(private vinilService: VinilService) {}

  ngOnInit(): void {
    this.vinilService.getAll().subscribe({
      next: (response) => {

        console.log(response);

        if (response.success) {
          this.vinis = response.data;
        }
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

}
