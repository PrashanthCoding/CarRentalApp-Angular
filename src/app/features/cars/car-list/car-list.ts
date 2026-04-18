import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../core/services/car.service';

@Component({
  selector: 'app-car-list',
  imports: [],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList implements OnInit {
  cars: any[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAll().subscribe({
      next: (res: any) => {
        this.cars = res;
      },
      error: (err) => {
        console.error('Error loading cars', err);
      },
    });
  }

  delete(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.carService.delete(id).subscribe(() => {
        this.loadCars(); // refresh list
      });
    }
  }
}
