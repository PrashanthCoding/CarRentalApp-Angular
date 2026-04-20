import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://localhost:7013/api/Auth';

  constructor(private http: HttpClient) {}

  // Login API
  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data);
  }

  // Register API
  register(data: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }
}
