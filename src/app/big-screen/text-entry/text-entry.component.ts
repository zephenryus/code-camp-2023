import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-text-entry',
  templateUrl: './text-entry.component.html',
  styleUrls: ['./text-entry.component.scss']
})
export class TextEntryComponent {
  private audio = new Audio();

  constructor(private http: HttpClient, private gameService: GameService) {
  }

  ngAfterViewInit(): void {
    this.audio.src = 'assets/audio/start1.mp3';
    this.audio.load();
    this.audio.play().catch(e => console.error('Error playing audio:', e));

    this.audio.onended = () => {
      // Audio has finished playing
      console.log('Audio finished playing');

      // Now, send the HTTP request
      this.gameService.updateGamePhase(1);
    };
  }


}
