import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private api = 'https://localhost:5001/api/payment';

  constructor(private http: HttpClient) {}

  getHistory() {
    return this.http.get(`${this.api}/history`);
  }
}
