import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from '../../../core/services/toaster.service';

@Component({
  selector: 'app-car-details',
  imports: [],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css',
})
export class CarDetails implements OnInit {
  car: any = {};

  constructor(
    private router: Router,
    private toasterService: ToasterService,
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.car = navigation.extras.state['car'];
    }
  }

  bookCar() {
    this.toasterService.show(
      'Booking confirmed! You will receive a confirmation email shortly.',
      'success',
    );
  }
}
