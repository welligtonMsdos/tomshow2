import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token';

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if(!token) return false;

    const payload = this.decodeToken(token);
    const now = Math.floor(Date.now() / 1000);
    return payload && payload.exp > now;
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      return null;
    }
  }

}
