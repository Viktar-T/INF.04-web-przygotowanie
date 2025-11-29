import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'quiz-maker',
  imports: [FormsModule],
  templateUrl: './quiz-maker.component.html',
  styleUrl: './quiz-maker.component.css'
})
export class QUIZMAKERComponent {
    questions: {content: string, correct: string, answers: { [key: string]: string }}[] = [];
    question = {
        content: "",
        correct: "",
        answers: {
            A: "",
            B: "",
            C: "",
            D: "",
        } as { [key: string]: string }
    }

    addQuestion() {
        console.log(`Dodano:\nPytanie: ${this.question.content}, Odpowiedzi: [${Object.values(this.question.answers)}], Prawidłowa: ${this.question.correct}`)
        this.questions.push({ ...this.question, answers: {...this.question.answers} });
    }

    get answerKeys() {
        return Object.keys(this.question.answers);
    }

    remove(index: number) {
        this.questions = this.questions.filter((_, i) => i != index);
    }
}
