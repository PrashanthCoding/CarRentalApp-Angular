import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css',
})
export class ToasterComponent {
  toaster$!: Observable<{ message: string; type: string } | null>;

  constructor(private toasterService: ToasterService) {
    this.toaster$ = this.toasterService.toaster$;
  }
}
