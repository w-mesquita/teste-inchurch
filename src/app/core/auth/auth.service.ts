import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, password: string): boolean {
    // simulando uma autenticação de sucesso
    if (email === 'admin@email.com.br' && password === '123456') {
      const token = 'ficticio123456'; // token fictício
      localStorage.setItem('userToken', token);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logout(): void {
    localStorage.removeItem('userToken');
  }
}
