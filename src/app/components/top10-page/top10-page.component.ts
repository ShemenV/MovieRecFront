import {Component, Input, OnInit} from '@angular/core';

import {MovieItemComponent} from "../movie-item/movie-item.component";
import {MoviesService} from "../../services/movies-service";
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-top10-page',
  standalone: true,
  imports: [
    MovieItemComponent
  ],
  templateUrl: './top10-page.component.html',
  styleUrl: './top10-page.component.scss',
  providers: [MoviesService]
})
export class Top10PageComponent implements OnInit{



  constructor(public movieService: MoviesService) {
  }
  films: Movie[] =[];
  ngOnInit(): void {
    this.films = this.movieService.getTop10()
  }

}
