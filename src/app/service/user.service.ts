import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../domain/result.model';
import { UserDto } from '../domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5011/api/';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<Result<UserDto[]>> {
      return this.http.get<Result<UserDto[]>>(this.apiUrl + 'User/GetAllUsers');
  }

}
