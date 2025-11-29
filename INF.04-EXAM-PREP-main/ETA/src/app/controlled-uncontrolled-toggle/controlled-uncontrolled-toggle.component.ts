import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'controlled-uncontrolled-toggle',
  imports: [FormsModule],
  templateUrl: './controlled-uncontrolled-toggle.component.html',
  styleUrl: './controlled-uncontrolled-toggle.component.css'
})
export class CONTROLLEDUNCONTROLLEDTOGGLEComponent implements AfterViewInit {
    controlled: boolean = true;
    @ViewChild('formReference') formElement!: ElementRef<HTMLFormElement>;
    nameElement!: HTMLInputElement; // opcjonalne, dodane dla czystości kodu
    emailElement!: HTMLInputElement; // opcjonalne, dodane dla czystości kodu
    messageElement!: HTMLInputElement; // opcjonalne, dodane dla czystości kodu

    info = {
        name: '',
        email: '',
        message: '',
    };

    changeMode(mode: boolean) {
        this.info = {
            name: '',
            email: '',
            message: '',
        };
        this.formElement.nativeElement.reset();
        this.controlled = mode;
    }

    ngAfterViewInit(): void {
        this.nameElement = this.formElement.nativeElement.querySelector("#name") as HTMLInputElement; // opcjonalne, dodane dla czystości kodu
        this.emailElement = this.formElement.nativeElement.querySelector("#email") as HTMLInputElement; // opcjonalne, dodane dla czystości kodu
        this.messageElement = this.formElement.nativeElement.querySelector("#message") as HTMLInputElement; // opcjonalne, dodane dla czystości kodu
    }

    uncontrolledSubmit(e: Event) {
        e.preventDefault();
        this.info.name = this.nameElement.value; // Tutaj wstawić (this.formElement.nativeElement.querySelector("#name") as HTMLInputElement) zamiast .nameElement. itd dla ponizszych
        this.info.email = this.emailElement.value;
        this.info.message = this.messageElement.value;

        console.log({...this.info, mode: this.controlled ? "controlled" : "uncontrolled" });
        this.formElement.nativeElement.reset();
    }

    controlledSubmit() {
        console.log({...this.info, mode: this.controlled ? "controlled" : "uncontrolled" });
                this.info = {
            name: '',
            email: '',
            message: '',
        };
    }

}
