import { Component } from '@angular/core';
import { map, takeWhile, timer } from "rxjs";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-text-entry-timer',
  templateUrl: './text-entry-timer.component.html',
  styleUrls: ['./text-entry-timer.component.scss']
})
export class TextEntryTimerComponent {
    timeLeft = 120; // 2 minutes in seconds
    displayTime = '';
    flashBackground = false;

    constructor(private gameService: GameService) {
    }

    ngOnInit() {
        timer(0, 1000).pipe(
            takeWhile(() => this.timeLeft > 0),
            map(() => {
                this.timeLeft--;
                this.displayTime = this.formatTime(this.timeLeft);

                if (this.timeLeft <= 5) {
                    this.flashBackground = !this.flashBackground;
                }
                return this.timeLeft;
            })
        ).subscribe({
            complete: () => this.sendCallToBackend()
        });
    }

    formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    sendCallToBackend() {
        this.gameService.updateGamePhase(2);
    }
}
