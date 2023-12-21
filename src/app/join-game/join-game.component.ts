import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GameService } from "../services/game.service";

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {
  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    const loadingScreen = document.getElementById("loadingScreen") as HTMLElement;
    const loadingBar = document.getElementById("loadingBar") as HTMLElement;

    this.gameService.joinLatestGame().subscribe(
        response => {
          if (response.gameId) {
            console.log('Joined Game ID:', response.gameId);
            // Store game_id in local storage or handle it as needed
            localStorage.setItem('game_id', response.gameId);
          } else {
            console.log('No active games found.');
          }
        },
        error => {
          console.error('Error joining latest game:', error);
        }
    );

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.router.navigate(['/join-wait']);
    }, 3000); // Delay duration in milliseconds, should match the duration of the loading animation
  }

}
