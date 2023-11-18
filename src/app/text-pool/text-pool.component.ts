import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { interval, switchMap } from "rxjs";
import { GameService } from "../services/game.service";

@Component({
  selector: 'app-text-pool',
  templateUrl: './text-pool.component.html',
  styleUrls: ['./text-pool.component.scss']
})
export class TextPoolComponent {
  enteredText = '';
  textPool: string[] = [];

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    interval(2000) // every 2000 milliseconds (2 seconds)
        .pipe(
            switchMap(() => this.gameService.getGamePhase())
        )
        .subscribe((response: any) => {
          console.log(response);
          if (response.phase >= 2) {
            this.router.navigate(['small-screen/meme-selection']);
          }
        }, (error: any) => {
          console.error('Error:', error);
        });
  }

  addToPool() {
    if (this.enteredText.trim() !== '') {
      this.textPool.push(this.enteredText.trim());
      this.enteredText = ''; // Clear the input after adding to the pool
    }
  }

  clearPool() {
    this.textPool = [];
  }
}
