import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Login } from './features/auth/login/login';
import { CarDetails } from './features/cars/car-details/car-details';
import { CarList } from './features/cars/car-list/car-list';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'cars', component: CarList },
  { path: 'car-details', component: CarDetails },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
];
