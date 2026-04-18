import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private api = 'https://localhost:5001/api/customer';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.api);
  }

  create(data: any) {
    return this.http.post(this.api, data);
  }
}
