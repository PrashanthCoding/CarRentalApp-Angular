import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // ✅ Save token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // ✅ Get token
  getToken() {
    return localStorage.getItem('token');
  }

  // ✅ Remove token
  clearToken() {
    localStorage.removeItem('token');
  }

  // ✅ 🔥 Get user from JWT
  getUser() {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);

      return {
        id: decoded.nameid,
        email: decoded.email,
      };
    } catch (error) {
      return null;
    }
  }
}
