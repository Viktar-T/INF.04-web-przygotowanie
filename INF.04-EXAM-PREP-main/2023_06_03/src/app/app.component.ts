import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    { name: 'komedia', val: 1 },
    { name: 'obyczajowy', val: 2 },
    { name: 'sensacyjny', val: 3 },
    { name: 'horror', val: 4 },
  ];
  movie = {
    tytul: '',
    kategoria: null,
  };
  onSubmit() {
    console.log(this.movie);
  }
}
