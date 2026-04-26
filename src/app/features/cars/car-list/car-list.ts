import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Car } from '../../../core/models/car.model';
import { CarService } from '../../../core/services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {
  cars$!: Observable<Car[]>;

  constructor(
    private router: Router,
    private carService: CarService,
  ) {}

  ngOnInit() {
    this.cars$ = this.carService.getCars().pipe(map((res) => res.data));
  }

  viewDetails(car: Car) {
    this.router.navigate(['/car-details', car.id]);
  }
}
