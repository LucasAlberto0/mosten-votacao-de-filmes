import { Component, OnInit } from '@angular/core';
import { Toast, ToastMessage } from '../../services/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-error',
  imports: [CommonModule],
  templateUrl: './toast-error.html',
  styleUrl: './toast-error.scss'
})
export class ToastError implements OnInit {
  message = '';
  type: 'success' | 'error' = 'error';
  showToast = false;
  fadingOut = false;

  constructor(private toastService: Toast) { }

  ngOnInit() {
    this.toastService.toastMessage$.subscribe((toast: ToastMessage) => {
      this.message = toast.message;
      this.type = toast.type;
      this.showToast = true;
      this.fadingOut = false;

      setTimeout(() => (this.fadingOut = true), 3600);
      setTimeout(() => {
        this.showToast = false;
        this.fadingOut = false;
      }, 4000);
    });
  }
}
