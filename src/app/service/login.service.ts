import { HttpClient } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { UserLoginDto } from '../domain/user-login-dto';
import { ApiResponse } from '../domain/api-response';
import { firstValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface UserPayload {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

   private readonly apiUrl = 'http://localhost:5011/api/User/';

   private userSignal = signal<UserPayload | null>(null);

   currentUser = computed(() => this.userSignal());

   constructor(private http: HttpClient) {
    this.getUserFromToken();
   }

   private getUserFromToken() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode<UserPayload>(token);
        this.userSignal.set(decoded);
      } catch (error) {
        console.error('Token inválido', error);
        this.logout();
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.userSignal.set(null);
  }

   async login(userLoginDto: UserLoginDto): Promise<ApiResponse> {

    try {

      const response = await firstValueFrom(
        this.http.post<ApiResponse>(this.apiUrl + "Login", userLoginDto)
      )

      if (response.data?.result) {
        localStorage.setItem('token', response.data.result);
        this.getUserFromToken();
      }

      return response;

    } catch (error) {
        console.error('Login failed', error);
        throw error;
    }

   }

}
