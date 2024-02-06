import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";
import {DecimalPipe} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';
import {MatFormField, MatLabel, MatHint, MatError} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-recomendation-by-user-id-page',
  standalone: true,
  imports: [
    DecimalPipe,
    MovieItemComponent,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './recomendation-by-user-id-page.component.html',
  styleUrl: './recomendation-by-user-id-page.component.scss'
})
export class RecomendationByUserIdPageComponent implements OnInit{

  userId: string
  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];
  ngOnInit(): void {
    this.films = this.movieService.getByUserId()
  }

  click(){
    console.log(this.userId)
  }

}
