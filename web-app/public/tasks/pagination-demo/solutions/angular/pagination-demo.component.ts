import { Component } from '@angular/core';

@Component({
  selector: 'pagination-demo',
  imports: [],
  templateUrl: './pagination-demo.component.html',
  styleUrl: './pagination-demo.component.css'
})
export class PAGINATIONDEMOComponent {
    Math = Math;
    items = Array.from({length: 42}, (_, i) => i+1);
    displayPerPage = 5;
    totalPages = Math.ceil(this.items.length / this.displayPerPage);
    currentPage = 0;
    buttons: number[] = [];
    constructor() {
        for (let i = 0; i<this.totalPages; i++) {
            if (i > 4) break;
            this.buttons[i] = i+1;
        }
    }
    changeAmount(event: Event) {
        this.displayPerPage = Number((event.target as HTMLSelectElement).value);
        console.log(`Rozmiar: ${this.displayPerPage}`);
        this.totalPages = Math.ceil(this.items.length / this.displayPerPage);
        if (this.currentPage > this.totalPages) this.currentPage = this.totalPages-1;
    }
    previousClick() {
        if (this.currentPage <= 0) return;
        this.currentPage--;
        console.log(`Strona: ${this.currentPage+1}`)
    }
    nextClick() {
        if (this.currentPage >= this.totalPages - 1) return;
        this.currentPage++;
        console.log(`Strona: ${this.currentPage+1}`)
    }
}

