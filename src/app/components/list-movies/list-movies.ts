import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Movie {
  id: number;
  title: string;
  genre: string;
  poster: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
}
@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.html',
  styleUrl: './list-movies.scss'
})
export class ListMovies {
  movies: Movie[] = [
    {
      id: 1,
      title: 'Superman',
      genre: 'Super-Herói',
      poster: 'img/movies/cartazSuperman.jpg',
      description: 'Um herói dividido entre sua origem kryptoniana e sua vida como Clark Kent. No novo filme de James Gunn, Superman encara desafios épicos e vilões clássicos defendendo justiça e verdade.',
      likeCount: 0,
      dislikeCount: 0
    },
    {
      id: 2,
      title: 'Quarteto Fantástico',
      genre: 'Super-Herói',
      poster: 'img/movies/cartazQuarteto.jpg',
      description: 'Nos anos 60, em uma realidade retrofuturista, o Quarteto Fantástico ganha poderes após missão espacial e enfrenta Galactus e sua arauta, a Surfista Prateada.',
      likeCount: 0,
      dislikeCount: 0
    },
    {
      id: 3,
      title: 'Corra que a Polícia Vem Aí',
      genre: 'Comédia',
      poster: 'img/movies/cartazCorra.jpg',
      description: 'Em 2025, Frank Drebin Jr. (Liam Neeson) lidera o esquadrão policial em missão para salvar o mundo, com muitas trapalhadas no estilo da franquia "Corra que a Polícia Vem Aí!".',
      likeCount: 0,
      dislikeCount: 0
    },
    {
      id: 4,
      title: 'Missão Impossível: O Acerto Final',
      genre: 'Ação',
      poster: 'img/movies/cartazMissao.jpg',
      description: '"Missão Impossível: Acerto Final" é o oitavo filme da franquia, com Ethan Hunt e sua equipe enfrentando uma nova ameaça: uma inteligência artificial chamada A Entidade, que representa um perigo global.',
      likeCount: 0,
      dislikeCount: 0
    },
    {
      id: 5,
      title: 'F1: O Filme',
      genre: 'Drama',
      poster: 'img/movies/cartazF1.jpg',
      description: 'Em "F1: O Filme" (2025), Sonny Hayes (Brad Pitt) sai da aposentadoria para mentorar Joshua Pearce (Damson Idris) e ajudar a equipe ApexGP a buscar a glória na Fórmula 1.',
      likeCount: 0,
      dislikeCount: 0
    },
    {
      id: 6,
      title: 'Pecadores',
      genre: 'Terror',
      poster: 'img/movies/cartazPecadores.jpg',
      description: 'O filme narra a história de irmãos gêmeos que retornam à sua cidade natal para recomeçar a vida, mas descobrem um mal ancestral à espreita. ',
      likeCount: 0,
      dislikeCount: 0
    }
  ];

  incrementLike(movie: Movie) {
    movie.likeCount++;
  }

  incrementDislike(movie: Movie) {
    movie.dislikeCount++;
  }

  likePercentage(movie: Movie): number {
    const total = movie.likeCount + movie.dislikeCount;
    if (total === 0) return 100; 
    return Math.round((movie.likeCount / total) * 100);
  }

}
