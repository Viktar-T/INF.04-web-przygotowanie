import { Component } from '@angular/core';

@Component({
  selector: 'single-answer-quiz',
  imports: [],
  templateUrl: './single-answer-quiz.component.html',
  styleUrl: './single-answer-quiz.component.css'
})
export class SINGLEANSWERQUIZComponent {
    selected: number|null = null;
    result_hidden = true;
    question = {
        content: "Który język programowania jest używany do tworzenia aplikacji webowych po stronie serwera?",
        correct: 1,
        answers: [
            "Javascript",
            "Python",
            "Html",
            "Css"
        ]
    }

    choose(index: number){
        this.result_hidden = true;
        this.selected = index;
    }

    check() {
        if (this.selected != null) {
            console.log(this.selected == this.question.correct ? "Poprawna" : "Błędna");
        }
        this.result_hidden = false;
    }
}

