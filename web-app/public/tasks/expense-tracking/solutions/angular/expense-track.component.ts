import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'expense-track',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './expense-track.component.html',
  styleUrl: './expense-track.component.css'
})
export class EXPENSETRACKComponent {
    categories = ["Food", "Transport", "Entertainment", "Clothing", "Other"];
    items: any[] = [];
    item = {
        description: '',
        amount: 0.00,
        date: '',
        category: -1,
        type: null
    }

    addItem(e: Event) {
        e.preventDefault();
        this.items.push({...this.item});
        console.log(this.items)
    }

    removeItem(index: number) {
        this.items = this.items.filter((_, i) => i != index);
    }

    sumItems() {
        return this.items.reduce((total, e) => total + e.amount * (e.type ? 1 : -1), 0);
    }

    getIncomeCount() {
        return this.items.filter(e => e.type).length;
    }

    getExpensesCount() {
        return this.items.filter(e => !e.type).length;
    }
}

