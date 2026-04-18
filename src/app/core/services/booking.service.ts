import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private api = 'https://localhost:5001/api/booking';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.api);
  }

  create(data: any) {
    return this.http.post(this.api, data);
  }

  cancel(id: number) {
    return this.http.put(`${this.api}/cancel/${id}`, {});
  }
}
