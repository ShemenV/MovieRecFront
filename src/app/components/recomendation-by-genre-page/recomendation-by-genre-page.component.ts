import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";
import {DecimalPipe} from "@angular/common";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelectModule} from "@angular/material/select";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-recomendation-by-genre-page',
  standalone: true,
  imports: [
    DecimalPipe,
    MovieItemComponent,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelectModule,
    MatInput
  ],
  templateUrl: './recomendation-by-genre-page.component.html',
  styleUrl: './recomendation-by-genre-page.component.scss'
})
export class RecomendationByGenrePageComponent  implements OnInit{



  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];
  selected: string;
  ngOnInit(): void {
    this.films = this.movieService.getTop10()
  }

}
