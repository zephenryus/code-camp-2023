import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { interval, switchMap } from "rxjs";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-text-entry-intro',
  templateUrl: './text-entry-intro.component.html',
  styleUrls: ['./text-entry-intro.component.scss']
})
export class TextEntryIntroComponent {
  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    interval(2000) // every 2000 milliseconds (2 seconds)
        .pipe(
            switchMap(() => this.gameService.getGamePhase())
        )
        .subscribe((response: any) => {
            console.log(response);
            if (response.phase >= 1) {
              this.router.navigate(['small-screen/text-pool']);
          }
        }, (error: any) => {
          console.error('Error:', error);
        });
  }
}
