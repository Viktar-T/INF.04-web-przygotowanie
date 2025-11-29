import { Component } from '@angular/core';

@Component({
  selector: 'faq-accordion',
  imports: [],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.css'
})
export class FAQACCORDIONComponent {
    openCount = 0;
    currentOpen: number|null = null;
    toggle(id: number) {
        if (this.currentOpen == id) {
            this.currentOpen = null;
            console.log(`Zamknij: ${id}`);
        } else {
            this.currentOpen = id;
            console.log(`Otwórz: ${id}`);
        }
        this.check();
    }
    pytania = [
        {
            id:1,
            title:'Jak rozpocząć pracę z aplikacją?',
            content: 'Aby rozpocząć pracę z aplikacją, wystarczy kliknąć na przycisk "Start" w głównym menu. Następnie możesz przejść przez krótki przewodnik, który pokaże Ci wszystkie dostępne funkcje. Aplikacja jest intuicyjna i łatwa w obsłudze.'
        },
        {
            id:2, // Zmień id na takie samo co ma inne pytanie i zobacz co się stanie
            title:'Czy moje dane są bezpieczne?',
            content: 'Tak, bezpieczeństwo Twoich danych jest dla nas priorytetem. Wszystkie informacje są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Nie udostępniamy danych osobowych osobom trzecim bez Twojej wyraźnej zgody.'
        },
        {
            id:3,
            title:'Czy moje dane są bezpieczne?',
            content: 'Tak, bezpieczeństwo Twoich danych jest dla nas priorytetem. Wszystkie informacje są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Nie udostępniamy danych osobowych osobom trzecim bez Twojej wyraźnej zgody.'
        },
        {
            id:4,
            title:'Czy moje dane są bezpieczne?',
            content: 'Tak, bezpieczeństwo Twoich danych jest dla nas priorytetem. Wszystkie informacje są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Nie udostępniamy danych osobowych osobom trzecim bez Twojej wyraźnej zgody.'
        }
    ];

    check() {
        this.openCount = this.pytania.reduce((sum, q) => {
            if (this.currentOpen == q.id) {
                sum++;
            }
            return sum;
        }, 0);
    }
}

