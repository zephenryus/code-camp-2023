import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    const loadingScreen = document.getElementById("loadingScreen") as HTMLElement;
    const loadingBar = document.getElementById("loadingBar") as HTMLElement;

    this.createGame();

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.redirectToNewComponent()
    }, 3000); // Delay duration in milliseconds, should match the duration of the loading animation
  }

  redirectToNewComponent() {
    this.router.navigate(['main-screen-lobby/']);
  }

  createGame(): void {
    const url = '/create-game';

    this.http.post(url, {}).subscribe(
        (response: any) => {
          console.log('Game created:', response);
          if (response.gameId) {
            localStorage.setItem('game_id', response.gameId);
          }
        },
        error => {
          console.error('Error creating game:', error);
        }
    );
  }
}
