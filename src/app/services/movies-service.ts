import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {movies, moviesByUser} from "../data/movieList";
import {Movie} from "../models/Movie";

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {
  }

  getTop10(): Movie[]{

    let top10Movies: Movie[] = []
    console.log(top10Movies)

    for(let a in movies.title){
      if (movies.title.hasOwnProperty(a)) {
        let movie: Movie = new Movie()
        movie.title = (movies.title as any)[a];
        movie.rating = (movies.w_score as any)[a];
        movie.genres = (movies.genres as any)[a];
        movie.rateCount = (movies.count_rating as any)[a];

        top10Movies.push(movie)
        console.log(movie)
        console.log(top10Movies)
      }
    }

    return top10Movies
  }

  getByUserId(): Movie[]{
    let topByUser: Movie[] = []
    console.log(topByUser)

    for(let a in moviesByUser.title){
      if (moviesByUser.title.hasOwnProperty(a)) {
        let movie: Movie = new Movie()
        movie.title = (moviesByUser.title as any)[a];

        topByUser.push(movie)
        console.log(movie)
        console.log(topByUser)
      }
    }

    return topByUser
  }
}
