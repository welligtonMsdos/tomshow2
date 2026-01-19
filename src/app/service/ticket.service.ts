import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, Observable, switchMap, tap } from 'rxjs';
import { Result } from '../domain/result.model';
import { ShowDto } from '../domain/show.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:5012/api/';

  private filterSignal = signal<'upcoming' | 'past'>('upcoming');

  public loading = signal<boolean>(false);

  currentFilter = this.filterSignal.asReadonly();

  constructor(private http: HttpClient) {}

  updateFilter(filter: 'upcoming' | 'past') {
    this.filterSignal.set(filter);
  }

  tickets = toSignal(
    toObservable(this.filterSignal).pipe(
      switchMap(filter => this.fetchTicketsFromApi(filter))
    ),
    {
    initialValue: {
      data: [] as ShowDto[],
      success: true,
      message: '', // Adicionado para satisfazer a interface
      errors: []   // Adicionado para satisfazer a interface
    } as Result<ShowDto[]>
  }
  );

  private fetchTicketsFromApi(status: string) {
  this.loading.set(true); // Começa o loading
  const endpoint = status === 'past' ? 'GetAllShowsPast' : 'GetAllShowsUpcoming';

  return this.http.get<Result<ShowDto[]>>(`${this.apiUrl}Show/${endpoint}`).pipe(
    tap(() => this.loading.set(false)),
    catchError((err) => {
      this.loading.set(false);
      throw err;
    })
  );
}

}
