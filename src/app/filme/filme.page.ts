import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilmePage implements OnInit {

  constructor(private ApiService: ApiService) { }
  titulo: string = "";
  descricao: string = "";
  ngOnInit() {


    this.ApiService.push().then((res) => {
        this.titulo = res.title;
        this.descricao = res.overview
    })
  }

}
