import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies-service';
import { Toast } from '../../services/toast';
import { ToastError } from '../toast-error/toast-error';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ToastError],
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})
export class Form {
  title = '';
  genre = '';
  poster = '';
  description = '';

  constructor(
    private moviesService: MoviesService,
    private toastService: Toast
  ) { }

  onSubmit() {
    if (!this.title || !this.genre || !this.poster) {
      this.toastService.showToast('Preencha todos os campos!', 'error');
      return;
    }

    this.moviesService.addMovie({
      title: this.title,
      genre: this.genre,
      poster: this.poster,
      description: this.description
    });

    this.title = '';
    this.genre = '';
    this.poster = '';
    this.description = '';

    this.toastService.showToast('Filme/Série cadastrado com sucesso!', 'success');
    const moviesSection = document.getElementById('movies');
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
