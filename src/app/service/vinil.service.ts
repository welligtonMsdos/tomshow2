import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../domain/result.model';
import { VinilDto } from '../domain/vinil.model';

@Injectable({
  providedIn: 'root'
})
export class VinilService {

  private apiUrl = 'http://localhost:5012/api/Vinil/';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Result<VinilDto>> {
    return this.http.get<Result<VinilDto>>(`${this.apiUrl + 'GetVinilById'}/${id}`);
  }

  getAll(): Observable<Result<VinilDto[]>> {
    return this.http.get<Result<VinilDto[]>>(this.apiUrl + 'GetAllVinis');
  }

}
