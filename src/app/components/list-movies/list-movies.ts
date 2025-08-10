import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService, Movie } from '../../services/movies-service';


@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.scss'
})
export class ListMovies implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies();
  }

  incrementLike(movie: Movie) {
    movie.likeCount++;
    this.moviesService.updateMovie(movie);
  }

  incrementDislike(movie: Movie) {
    movie.dislikeCount++;
    this.moviesService.updateMovie(movie);
  }

  getTotalLikes(): number {
    return this.moviesService.getTotalLikes();
  }

  getTotalDislikes(): number {
    return this.moviesService.getTotalDislikes();
  }

  getTotalVotes(): number {
    return this.moviesService.getTotalVotes();
  }

  likePercentage(movie: Movie): number {
    const total = movie.likeCount + movie.dislikeCount;
    if (total === 0) return 100;
    return Math.round((movie.likeCount / total) * 100);
  }
}
