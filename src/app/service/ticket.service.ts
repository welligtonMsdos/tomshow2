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
  public currentFilter = this.filterSignal.asReadonly();

  // Defina o valor inicial fora para facilitar a leitura e tipagem
  private readonly initialResult: Result<ShowDto[]> = {
    data: [],
    success: true,
    message: '',
    errors: {}
  };

  public tickets = toSignal(
    toObservable(this.filterSignal).pipe(
      switchMap(filter => this.fetchTicketsFromApi(filter))
    ),
    { initialValue: this.initialResult }
  );

  constructor(private http: HttpClient) {}

  updateFilter(filter: 'upcoming' | 'past') {
    this.filterSignal.set(filter);
  }

  public ticketList = computed(() => this.tickets().data);

  private fetchTicketsFromApi(status: string): Observable<Result<ShowDto[]>> {
    this.loading.set(true);
    const endpoint = status === 'past' ? 'GetAllShowsPast' : 'GetAllShowsUpcoming';

    return this.http.get<Result<ShowDto[]>>(`${this.apiUrl}Show/${endpoint}`).pipe(
      tap(() => this.loading.set(false)),
      catchError((err) => {
        this.loading.set(false);
        // CORREÇÃO: Retorne um Observable do objeto, não um array dentro de um array
        return [ {
          ...this.initialResult,
          success: false,
          message: 'Não foi possível carregar os shows.',
          errors: err
        } ];
      })
    );
  }

}
