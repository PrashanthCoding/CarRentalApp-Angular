import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarService {
  private baseUrl = 'https://localhost:7013/api/car';

  constructor(private http: HttpClient) {}

  // Get all cars
  getCars() {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get car by ID
  getCarById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Search cars
  searchCars(data: any) {
    return this.http.post<any[]>(`${this.baseUrl}/search`, data);
  }

  // Book car
  bookCar(data: any) {
    return this.http.post(`${this.baseUrl}/book`, data);
  }
}
