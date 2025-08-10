import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type ToastType = 'success' | 'error';

export interface ToastMessage {
  message: string;
  type: ToastType;
}

@Injectable({
  providedIn: 'root'
})
export class Toast {
  private toastSubject = new Subject<ToastMessage>();
  toastMessage$ = this.toastSubject.asObservable();

  showToast(message: string, type: ToastType = 'error'): void {
    this.toastSubject.next({ message, type });
  }
}
