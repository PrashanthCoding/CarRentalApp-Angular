import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-booking-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.css',
})
export class BookingForm implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      carId: ['', Validators.required],
      customerId: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) {
      alert('Please fill all fields');
      return;
    }

    this.bookingService.create(this.form.value).subscribe({
      next: () => {
        alert('Booking Created Successfully');
        this.form.reset();
      },
      error: (err) => {
        console.error(err);

        // your backend error handling
        if (err.error?.message) {
          alert(err.error.message);
        } else {
          alert('Something went wrong');
        }
      },
    });
  }
}
