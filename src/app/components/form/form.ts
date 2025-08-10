import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies-service';


@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  title = '';
  genre = '';
  poster = '';
  description = '';

  constructor(private moviesService: MoviesService) {}

  onSubmit() {
    if (!this.title || !this.genre || !this.poster || !this.description) {
      alert('Preencha todos os campos!');
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

    alert('Filme cadastrado com sucesso!');
  }
}
