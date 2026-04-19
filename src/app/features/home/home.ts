import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToasterService } from '../../shared/components/toaster/toaster.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isMenuOpen = false;

  constructor(private toasterService: ToasterService) {}

  cars = [
    {
      name: 'BMW X5',
      price: 120,
      seats: 5,
      fuel: 'Diesel',
      type: 'Automatic',
      image:
        'https://images.unsplash.com/photo-1606611013016-969c19f27a42?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Audi A6',
      price: 100,
      seats: 5,
      fuel: 'Petrol',
      type: 'Automatic',
      image:
        'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Tesla Model 3',
      price: 150,
      seats: 5,
      fuel: 'Electric',
      type: 'Automatic',
      image:
        'https://images.unsplash.com/photo-1560958089-fbf3ee9c4f5b?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  bookCar(car: any) {
    this.toasterService.show(
      `Booking confirmed for ${car.name}! You will receive a confirmation email shortly.`,
      'success',
    );
  }
}
