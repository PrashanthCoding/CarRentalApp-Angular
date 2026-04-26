import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response.model';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'https://localhost:7013/api';
  private carUrl = `${this.baseUrl}/Car`;

  constructor(private http: HttpClient) {}

  // Get all cars
  getCars(): Observable<ApiResponse<Car[]>> {
    return this.http.get<ApiResponse<Car[]>>(this.carUrl);
  }

  // Get car by ID
  getCarById(id: number): Observable<ApiResponse<Car>> {
    const token = localStorage.getItem('token');

    return this.http.get<ApiResponse<Car>>(`${this.carUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Search cars
  searchCars(data: any): Observable<ApiResponse<Car[]>> {
    return this.http.post<ApiResponse<Car[]>>(`${this.carUrl}/search`, data);
  }

  // Book car
  bookCar(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Car/book`, data);
  }
}
