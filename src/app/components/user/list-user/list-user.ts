import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { UserDto } from '../../../domain/user.model';

@Component({
  selector: 'app-list-user',
  imports: [],
  templateUrl: './list-user.html',
  styleUrl: './list-user.css',
})
export class ListUser implements OnInit {

    users: UserDto[] = [];
    isLoading = true;

    currentPage = 1;
    itemsPerPage = 5;
    protected readonly Math = Math;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {

        if (response.success) {
          this.users = response.data;
        }
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.users.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

}
