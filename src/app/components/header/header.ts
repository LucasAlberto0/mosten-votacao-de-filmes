import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
menuAtivo = false;


  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = document.querySelector('#header') as HTMLElement;
    if (header) {
      header.classList.toggle('rolagem', window.scrollY > 600);
    }
  }
}
