import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private toasterSubject = new BehaviorSubject<{ message: string; type: string } | null>(null);
  public toaster$ = this.toasterSubject.asObservable();

  show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.toasterSubject.next({ message, type });
    setTimeout(() => {
      this.toasterSubject.next(null);
    }, 3000);
  }
}
