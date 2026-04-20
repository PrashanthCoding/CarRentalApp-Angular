import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarService } from '../../core/services/car.service';
import { ToasterService } from '../../shared/components/toaster/toaster.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  isMenuOpen = false;
  cars: any[] = [];
  search = {
    location: '',
    fromDate: '',
    toDate: '',
  };

  constructor(
    private toasterService: ToasterService,
    private carService: CarService,
  ) {}

  // Load cars from API
  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: () => {
        this.toasterService.show('Failed to load cars', 'error');
      },
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Booking API call
  bookCar(car: any) {
    const booking = {
      carId: car.carId,
      fromDate: new Date(),
      toDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      userName: 'test', // later from token
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
    this.carService.searchCars(this.search).subscribe({
      next: (res) => {
        this.cars = res;
      },
      error: () => {
        this.toasterService.show('Search failed', 'error');
      },
    });
  }
}
