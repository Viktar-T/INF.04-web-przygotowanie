import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'movie-watchlist',
  imports: [FormsModule],
  templateUrl: './movie-watchlist.component.html',
  styleUrl: './movie-watchlist.component.css'
})
export class MovieWatchlistComponent {
    genres = ["Dramat", "Komedia", "Akcja", "Horror", "Sci-Fi"];
    movie = {
        title: '',
        genre: '',
        rating: 0
    };
    movies: {title: string, genre: string, rating: number}[] = [];

    processForm() {
        if (this.movies.some(m => m.title == this.movie.title )) {
            console.log("Film już istnieje w liście");
            return;
        }
        this.movies.push({ title: this.movie.title, genre: this.genres[Number(this.movie.genre)], rating: this.movie.rating })
        console.log(this.movie);
        this.movie = {
            title: '',
            genre: '',
            rating: 0
        };
    }
}
