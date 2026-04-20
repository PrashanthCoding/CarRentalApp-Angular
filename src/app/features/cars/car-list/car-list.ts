import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../../core/services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList implements OnInit {
  cars: any[] = [];

  constructor(
    private router: Router,
    private carService: CarService,
  ) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: () => {
        alert('Error loading cars');
      },
    });
  }

  viewDetails(car: any) {
    this.router.navigate(['/car-details'], { state: { car } });
  }
}
