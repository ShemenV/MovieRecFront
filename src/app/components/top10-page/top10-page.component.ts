import { Component } from '@angular/core';
import {movies} from '../../data/movieList';
import {MovieItemComponent} from "../movie-item/movie-item.component";

@Component({
  selector: 'app-top10-page',
  standalone: true,
  imports: [
    MovieItemComponent
  ],
  templateUrl: './top10-page.component.html',
  styleUrl: './top10-page.component.scss'
})
export class Top10PageComponent {
a = movies
}
