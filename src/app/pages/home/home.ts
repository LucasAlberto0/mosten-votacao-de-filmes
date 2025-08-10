import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ListMovies } from '../../components/list-movies/list-movies';
import { Form } from '../../components/form/form';

@Component({
  selector: 'app-home',
  imports: [Header, ListMovies, Form],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
