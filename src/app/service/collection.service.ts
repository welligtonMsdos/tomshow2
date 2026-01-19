import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../domain/result.model';
import { VinilDto } from '../domain/vinil.model';
import { ShowDto } from '../domain/show.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private apiUrl = 'http://localhost:5012/api/';

  constructor(private http: HttpClient) {}

  getVinilById(id: number): Observable<Result<VinilDto>> {
    return this.http.get<Result<VinilDto>>(`${this.apiUrl + 'Vinil/GetVinilById'}/${id}`);
  }

  getAllVinil(): Observable<Result<VinilDto[]>> {
    return this.http.get<Result<VinilDto[]>>(this.apiUrl + 'Vinil/GetAllVinis');
  }

  getAllShows(): Observable<Result<ShowDto[]>> {
    return this.http.get<Result<ShowDto[]>>(this.apiUrl + 'Show/GetAllShows');
  }

}
