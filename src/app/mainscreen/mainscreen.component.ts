// mainscreen.component.ts
import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { interval, switchMap } from "rxjs";

@Component({
  selector: 'app-mainscreen',
  template: `
    <div class="mainscreen-container">
      <h1>Welcome to the HAVOC Lobby!!</h1>
      <p>Players: {{ numberOfPlayers }}</p>
      <button (click)="everybodysReady()">Everybody's Ready!</button>
    </div>
  `,
  styleUrls: ['./mainscreen.component.scss']
})
export class MainscreenComponent {
  numberOfPlayers: number = 0;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    interval(1000) // every 1000 milliseconds
        .pipe(
            switchMap(() => this.http.get('http://13.57.16.4:8080/total-players'))
        )
        .subscribe(
            (response: any) => {
              this.numberOfPlayers = response.totalPlayers;
            },
            error => {
              console.error('Error:', error);
            }
        );
  }

  // Placeholder function for the "Everybody's Ready" button
  everybodysReady(): void {
    // You can add logic here for what should happen when everybody is ready
    console.log("Everybody's ready! Let the games begin!");
      const url = 'http://13.57.16.4:8080/update-game-status';
      this.http.post(url, { gameId: localStorage.getItem('game_id') }).subscribe((response: any) => {
          this.router.navigate(['big-screen/text-entry']);
      });
  }
}
