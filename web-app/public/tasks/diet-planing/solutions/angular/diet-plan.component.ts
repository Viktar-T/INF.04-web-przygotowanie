// Wykonał AdamrePL 2025
// Te vibe-kodowane polecenia są bardzo nie jasne, a sama treść nie jest zgodna z aplikacją na podglądzie

import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'diet-plan',
  imports: [FormsModule],
  templateUrl: './diet-plan.component.html',
  styleUrl: './diet-plan.component.css'
})
export class DIETPLANComponent {
    meals: {name: string, calories: number,  type: string}[] = [];
    meal = {
        name: '',
        calories: 0,
        time: '',
        type: ''
    }
    calSum: number = 0;

    updateCals() {
        this.calSum = this.meals.reduce((sum, m) => sum + m.calories, 0)
    }

    submitForm() {
        this.meals.push({...this.meal});
        this.updateCals();
    }

    remove(i: number) {
        this.meals = this.meals.filter((_, index) => i != index);
        this.updateCals();
    }
}

