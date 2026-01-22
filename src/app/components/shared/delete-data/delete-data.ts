import { HttpClient } from '@angular/common/http';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  imports: [],
  templateUrl: './delete-data.html',
  styleUrl: './delete-data.css',
})
export class DeleteData {

  // Inputs usando a nova sintaxe de Signals do Angular
  id = input.required<string>();

  // Eventos para o componente pai
  onConfirm = output<void>();
  onCancel = output<void>();

}
