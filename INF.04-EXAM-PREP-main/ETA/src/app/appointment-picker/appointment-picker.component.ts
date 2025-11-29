import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'appointment-picker',
  imports: [FormsModule],
  templateUrl: './appointment-picker.component.html',
  styleUrl: './appointment-picker.component.css'
})
export class APPOINTMENTPICKERComponent {
    sent = false;
    formDetails = {
        name: '',
        date: '',
        time: ''
    };
    results = {
        name: '',
        iso: ''
    }
    getFullDateOrTime(time: boolean): string {
        if (time) {
            return new Date().toTimeString();
        }
        return new Date().toISOString().split("T")[0];
    }
    clickHandler() {
        const chosen = new Date(`${this.formDetails.date}T${this.formDetails.time}`);
        this.results.iso = chosen.toISOString();
        this.results.name = this.formDetails.name;
        if (Object.values(this.formDetails).some(v => v === null || v === undefined || v === '')) {
            console.error("Wszystkie pola muszą być wypełnione.");
            return;
        }

        if (chosen <= new Date()) {
            console.error("Wybrana data i godzina są w przeszłości.");
            return;
        }

        console.log(this.results);
        this.sent = true;
    }
}
