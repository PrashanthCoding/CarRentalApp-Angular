import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/api-response.model';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'https://localhost:7013/api';

  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get<ApiResponse<Car[]>>(`${this.baseUrl}/car`);
  }

  searchCars(data: any) {
    return this.http.post<ApiResponse<Car[]>>(`${this.baseUrl}/car/search`, data);
  }

  bookCar(data: any) {
    return this.http.post(`${this.baseUrl}/booking`, data);
  }
}
