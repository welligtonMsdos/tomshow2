import { Component, OnInit } from '@angular/core';
import { VinilDto } from '../../../domain/vinil.model';
import { CurrencyPipe } from '@angular/common';
import { CollectionService } from '../../../service/collection.service';
@Component({
  selector: 'app-list-vinil',
  imports: [CurrencyPipe],
  templateUrl: './list-vinil.html',
  styleUrl: './list-vinil.css',
})
export class ListVinil implements OnInit{

  vinis: VinilDto[] = [];
  isLoading = true;

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.collectionService.getAllVinil().subscribe({
      next: (response) => {

        if (response.success) {
          this.vinis = response.data;
        }
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

}
