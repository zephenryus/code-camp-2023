// mainscreen.component.ts
import { Component } from '@angular/core';

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

  // Placeholder function for the "Everybody's Ready" button
  everybodysReady(): void {
    // You can add logic here for what should happen when everybody is ready
    console.log("Everybody's ready! Let the games begin!");
  }
}
