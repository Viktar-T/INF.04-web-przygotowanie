import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'feedback-form-counter',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './feedback-form-counter.component.html',
  styleUrl: './feedback-form-counter.component.css'
})
export class FEEDBACKFORMCOUNTERComponent {
    readonly max = 200;
    valid: boolean = false;

    data = {
        name: "",
        email: "",
        comment: "",
    }

    verifyForm() {
        this.valid = false;
        if (this.data.name.length == 0 || this.data.email.length == 0 || this.data.comment.length == 0) {
            alert("Błąd! Nie wypełniono pola");
            return;
        }

        if (this.max - this.data.comment.length < 0) {
            alert("Błąd! Przekroczono limit znaków.");
            return
        };

        const clean_mail = this.data.email.replaceAll(" ", "");
        if (!clean_mail.includes("@")) {
            alert("Błąd! Niepoprawny Email.\nPrzykład poprawnego email: example@domain.com");
            return;
        }
        const at_split = clean_mail.split("@");
        if (at_split[0].length == 0 || at_split[1].length == 0 || !at_split[1].includes(".")) {
            alert("Błąd! Niepoprawny Email.\nPrzykład poprawnego email: example@domain.com");
            return;
        }
        const dot_split = at_split[1].split(".");
        if (dot_split.includes('')) {
            alert("Błąd! Niepoprawdy Email.\nPrzykład poprawnego emaila: example@domain.com");
            return;
        }

        this.valid = true;
        console.log(this.data);
    }
}
