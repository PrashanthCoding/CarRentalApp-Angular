import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToasterService } from '../../shared/components/toaster/toaster.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(
    private http: HttpClient,
    private toaster: ToasterService,
  ) {}

  // ✅ Form model
  contact = {
    name: '',
    email: '',
    message: '',
  };

  // ✅ Submit method
  sendMessage() {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      this.toaster.show('Please fill all fields', 'error');
      return;
    }

    this.http.post('https://localhost:5001/api/contact', this.contact).subscribe({
      next: () => {
        this.toaster.show('Message sent successfully', 'success');

        // 🔄 Reset form
        this.contact = {
          name: '',
          email: '',
          message: '',
        };
      },
      error: () => {
        this.toaster.show('Failed to send message', 'error');
      },
    });
  }
}
