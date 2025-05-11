import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.page.html',
  styleUrls: ['./lista-filmes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaFilmesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  movies = [
    {
      title: 'O Poderoso Chefão',
      year: 1972,
      poster: 'https://m.media-amazon.com/images/I/51rggtPgmRL._AC_.jpg'
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      poster: 'https://m.media-amazon.com/images/I/51k0qaipROL._AC_.jpg'
    },
    {
      title: 'Parasita',
      year: 2019,
      poster: 'https://m.media-amazon.com/images/I/81V+IlaUD-L._AC_SY679_.jpg'
    },
    {
      title: 'Clube da Luta',
      year: 1999,
      poster: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg'
    },
    {
      title: 'Interestelar',
      year: 2014,
      poster: 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg'
    },
    {
      title: 'La La Land',
      year: 2016,
      poster: 'https://m.media-amazon.com/images/I/81zP4P9k9qL._AC_SY679_.jpg'
    }
  ];
}
