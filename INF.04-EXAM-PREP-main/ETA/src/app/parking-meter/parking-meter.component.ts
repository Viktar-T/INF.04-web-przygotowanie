import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'parking-meter',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './parking-meter.component.html',
  styleUrl: './parking-meter.component.css'
})
export class PARKINGMETERComponent {
    readonly cost = {base: 2, block: 1};
    readonly block_duration: number = 30;
    minutes: number = 0;
    total_blocks = 0;
    total_cost = 0;

    calc() {
        if (this.minutes < 1) return;
        this.total_blocks = Math.ceil(this.minutes/this.block_duration);
        this.total_cost = this.cost.base + (this.total_blocks * this.cost.block);
        console.log(`Min: ${this.minutes}; Bloki: ${this.total_blocks}; Opłata: ${this.total_cost} PLN`);
    }
}
