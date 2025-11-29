import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    items = ["Programowanie w C#", "Angular dla początkujących", "Kurs Django"];

    course?: number;
    applicant?: string;

    submit() {
        console.log(this.applicant);
        console.log(this.course != null && this.items[this.course-1] != null ? this.items[this.course-1] : "Nieprawidłowy numer kursu");
    }
}
