import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  features = [
    {
      title: 'Quality Vehicles',
      description: 'All our cars are well-maintained and regularly serviced.',
      icon: '🚗',
    },
    {
      title: '24/7 Support',
      description: 'Our customer support team is available around the clock.',
      icon: '📞',
    },
    {
      title: 'Easy Booking',
      description: 'Book your car online in just a few clicks.',
      icon: '⚡',
    },
  ];
}
