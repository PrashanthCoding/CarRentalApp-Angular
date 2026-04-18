import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
  },

  {
    path: 'cars',
    loadComponent: () => import('./features/cars/car-list/car-list').then((m) => m.CarList),
  },

  {
    path: 'bookings',
    loadComponent: () =>
      import('./features/bookings/booking-list/booking-list').then((m) => m.BookingList),
  },

  {
    path: 'customers',
    loadComponent: () =>
      import('./features/customers/customer-list/customer-list').then((m) => m.CustomerList),
  },

  {
    path: 'payments',
    loadComponent: () =>
      import('./features/payments/payment-history/payment-history').then((m) => m.PaymentHistory),
  },

  { path: '**', redirectTo: 'login' },
];
