import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ListMovies } from '../../components/list-movies/list-movies';

@Component({
  selector: 'app-home',
  imports: [Header, ListMovies],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
