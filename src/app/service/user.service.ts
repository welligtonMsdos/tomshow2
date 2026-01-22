import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Result } from '../domain/result.model';
import { UserDto } from '../domain/user.model';
import { UserCreateDto } from '../domain/userCreate.model';
import { UserUpdateDto } from '../domain/userUpdate.mode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5011/api/';

  // 1. Criamos o Signal privado que guardará a lista de usuários em memória
  private usersSignal = signal<UserDto[]>([]);

  // 2. Expomos uma versão apenas de leitura para os componentes
  readonly users = computed(() => this.usersSignal());

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Result<UserDto[]>> {
    return this.http.get<Result<UserDto[]>>(this.apiUrl + 'User/GetAllUsers').pipe(
      tap(result => {
        if (result.success && result.data) {
          this.usersSignal.set(result.data);
        }
      })
    );
  }

  getUserById(id: string): Observable<Result<UserDto>> {
    return this.http.get<Result<UserDto>>(this.apiUrl + `User/GetUserById/${id}`);
  }

  deleteUser(id: string): Observable<Result<void>> {
    return this.http.delete<Result<void>>(this.apiUrl + `User/DeleteUser/${id}`).pipe(
      tap(result => {
        if (result.success) {
          this.usersSignal.update(users => users.filter(u => u._id !== id));
        }
      })
    );
  }

  addNewUser(user: UserCreateDto): Observable<Result<UserDto>> {
    return this.http.post<Result<UserDto>>(this.apiUrl + 'User/AddUser', user).pipe(
      tap(result => {
        if (result.success && result.data) {
          this.usersSignal.update(users => [...users, result.data!]);
        }
      })
    );
  }

  updateUser(id: string, user: Partial<UserUpdateDto>): Observable<Result<UserDto>> {
    return this.http.put<Result<UserDto>>(this.apiUrl + `User/UpdateUser/${id}`, user).pipe(
      tap(result => {
        if (result.success && result.data) {
          this.usersSignal.update(users => users.map(u => u._id === id ? result.data! : u));
        }
      })
    );
  }

}
