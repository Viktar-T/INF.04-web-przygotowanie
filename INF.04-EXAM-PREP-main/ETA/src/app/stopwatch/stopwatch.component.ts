import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'stopwatch',
  imports: [],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css'
})
export class STOPWATCHComponent {
    seconds: number = 0;
    stamps: number[] = [];
    sub!: Subscription;
    isRunning: boolean = false;

    startTimer() {
        this.isRunning = true;
        this.sub = interval(1000).subscribe(() => {
            this.seconds++;
        });
    }

    stopTimer() {
        this.isRunning = false;
        this.sub.unsubscribe();
    }

    resetStopwatch() {
        this.seconds = 0;
        this.stamps = [];
        console.log(this.stamps);
    }

    saveTimestamp() {
        this.stamps.push(this.seconds);
        console.log(this.stamps);
    }
}
