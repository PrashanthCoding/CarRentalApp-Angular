import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToasterComponent } from './shared/components/toaster/toaster.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToasterComponent],
  template: `<router-outlet></router-outlet><app-toaster></app-toaster>`,
})
export class App {
  protected readonly title = signal('CarRentalApp');
}
