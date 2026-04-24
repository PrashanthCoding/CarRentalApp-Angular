import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Car } from '../../core/models/car.model';
import { CarService } from '../../core/services/car.service';
import { ToasterService } from '../../core/services/toaster.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isMenuOpen = false;
  cars$!: Observable<Car[]>;
  cars: Car[] = [];
  search = {
    location: '',
    pickupDate: '',
    returnDate: '',
  };

  constructor(
    private toasterService: ToasterService,
    private carService: CarService,
  ) {
    this.cars$ = this.carService.getCars().pipe(map((res) => res.data));
  }

  // Load cars from API
  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: (res) => {
        console.log('API RESPONSE:', res);
        this.cars = [...res.data];
      },
      error: (err) => {
        console.error('API ERROR:', err);
        this.toasterService.show('Failed to load cars', 'error');
      },
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  bookCar(car: Car) {
    if (!this.search.pickupDate || !this.search.returnDate) {
      this.toasterService.show('Please select dates', 'error');
      return;
    }

    const booking = {
      carId: car.id,
      fromDate: this.search.pickupDate,
      toDate: this.search.returnDate,
      userName: 'test',
    };

    this.carService.bookCar(booking).subscribe({
      next: () => {
        this.toasterService.show(`Booking confirmed for ${car.name}`, 'success');
      },
      error: () => {
        this.toasterService.show('Booking failed', 'error');
      },
    });
  }

  searchCars() {
    if (!this.search.pickupDate || !this.search.returnDate) {
      this.toasterService.show('Please select dates', 'error');
      return;
    }

    const payload = {
      location: this.search.location,
      pickupDate: new Date(this.search.pickupDate).toISOString(),
      returnDate: new Date(this.search.returnDate).toISOString(),
    };

    this.carService.searchCars(payload).subscribe({
      next: (res) => {
        this.cars = [...res.data];
      },
      error: () => {
        this.toasterService.show('Search failed', 'error');
      },
    });
  }
}
