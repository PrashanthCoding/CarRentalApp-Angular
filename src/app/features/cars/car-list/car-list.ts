import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarList {
  constructor(private router: Router) {}
  cars = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      price: 5000,
      seats: 5,
      fuel: 'Diesel',
      type: 'SUV',
      description: 'A premium luxury SUV with advanced features and exceptional comfort.',
      image:
        'https://images.unsplash.com/photo-1606611013016-969c19f27a42?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      price: 4000,
      seats: 5,
      fuel: 'Petrol',
      type: 'Sedan',
      description: 'Elegant sedan with cutting-edge technology and smooth performance.',
      image:
        'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      brand: 'Toyota',
      model: 'Innova',
      price: 3000,
      seats: 7,
      fuel: 'Diesel',
      type: 'MPV',
      description: 'Spacious MPV perfect for family trips with reliable Toyota quality.',
      image:
        'https://images.unsplash.com/photo-1605559424843-9e4c3febda46?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      brand: 'Mercedes',
      model: 'C-Class',
      price: 4500,
      seats: 5,
      fuel: 'Petrol',
      type: 'Sedan',
      description: 'Luxurious sedan offering unparalleled comfort and style.',
      image:
        'https://images.unsplash.com/photo-1560958089-b8a46dd52d12?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      brand: 'Honda',
      model: 'Civic',
      price: 3500,
      seats: 5,
      fuel: 'Petrol',
      type: 'Sedan',
      description: 'Reliable and fuel-efficient sedan with modern design.',
      image:
        'https://images.unsplash.com/photo-1606611013016-969c19f27a42?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 6,
      brand: 'Ford',
      model: 'Mustang',
      price: 6000,
      seats: 4,
      fuel: 'Petrol',
      type: 'Coupe',
      description: 'Iconic sports coupe with powerful engine and thrilling drive.',
      image:
        'https://images.unsplash.com/photo-1552821206-bc4eb6a7b230?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 7,
      brand: 'Tesla',
      model: 'Model 3',
      price: 5500,
      seats: 5,
      fuel: 'Electric',
      type: 'Sedan',
      description: 'Electric sedan with autopilot features and zero emissions.',
      image:
        'https://images.unsplash.com/photo-1560958089-fbf3ee9c4f5b?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 8,
      brand: 'Nissan',
      model: 'Altima',
      price: 3200,
      seats: 5,
      fuel: 'Petrol',
      type: 'Sedan',
      description: 'Comfortable sedan with advanced safety features.',
      image:
        'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 9,
      brand: 'Chevrolet',
      model: 'Cruze',
      price: 2800,
      seats: 5,
      fuel: 'Petrol',
      type: 'Sedan',
      description: 'Affordable sedan with good fuel economy and reliability.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 10,
      brand: 'Hyundai',
      model: 'Tucson',
      price: 3800,
      seats: 5,
      fuel: 'Diesel',
      type: 'SUV',
      description: 'Compact SUV with modern tech and spacious interior.',
      image:
        'https://images.unsplash.com/photo-1606611012591-a4b6be0b7b5e?q=80&w=1000&auto=format&fit=crop',
    },
  ];

  selectCar(car: any) {
    this.router.navigate(['/car-details'], { state: { car } });
  }
}
