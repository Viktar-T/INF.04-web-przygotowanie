import { Component } from '@angular/core';

/**
 * Szczerze? Jeżeli na to zadanie jest przeznaczone 45minut?
 * to ja musiałem naprawde mocno sobie komplikować życie bo nie ma szans
 * że tą aplikacje zrobi się w 45min, zakładając że struktura danych moze w przyszlosci ulec zmianie
 * ...
 * dobra moze dalo sie zrobic to szybciej hardcodujac wszystko, bez dynamicznosci
 * ale rzeczywiscie skomplikowalem sprawe bo
 * zrobilem funkcje ktora moze sortowac kazda kolumne bez zwgledu na ilosc kolumn i bez względu na jej nazwe (nazwe jako klucz)
 * nie wazne czy ta kolumna zawiera numer czy string
 */


@Component({
  selector: 'sortable-table',
  imports: [],
  templateUrl: './sortable-table.component.html',
  styleUrl: './sortable-table.component.css'
})
export class SORTABLETABLEComponent {
    // nieposortowana lista
    leaderboard: {name: string, score: number}[] = [
        {name: 'Marcin Woźniak', score: 79},
        {name: 'Katarzyna Zielińska', score: 89},
        {name: 'Agnieszka Dąbrowska', score: 83},
        {name: 'Piotr Nowak', score: 87},
        {name: 'Monika Kozłowska', score: 93},
        {name: 'Anna Kowalska', score: 95},
        {name: 'Maria Wiśniewska', score: 92},
        {name: 'Joanna Wójcik', score: 88},
        {name: 'Łukasz Krawczyk', score: 82},
        {name: 'Jan Kowalski', score: 78},
        {name: 'Michał Kamiński', score: 96},
        {name: 'Ewa Jankowska', score: 94},
        {name: 'Tomasz Lewandowski', score: 91},
        {name: 'Paweł Kaczmarek', score: 85},
        {name: 'Magdalena Mazur', score: 90}
    ];

    current: [string, boolean] = ["name", true];

    constructor () {
        this.callSort()
    }

    callSort() {
        this.sort(this.current[0] as keyof typeof this.leaderboard[0], this.current[1]);
        console.log(`Sort: field=${this.current[0]} dir=${this.current[1] ? 'asc' : 'desc'}`)
    }

    change(clicked: [string, boolean]) {
        if (this.current[0] == clicked[0]) {
            this.current[1] = !this.current[1];
            this.callSort()
            return;
        }
        this.current = clicked;
        this.callSort()
    }

    sort(column: keyof typeof this.leaderboard[0], order: boolean) {
        this.leaderboard.sort((a, b) => {
            if (typeof a[column] === 'string' && typeof b[column] === 'string') {
                return order ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]);
            }
            if (typeof a[column] === 'number' && typeof b[column] === 'number') {
                return order ? a[column] - b[column] : b[column] - a[column];
            }

            return 0;
        });
    }
}
