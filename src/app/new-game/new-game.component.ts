import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    const loadingScreen = document.getElementById("loadingScreen") as HTMLElement;
    const loadingBar = document.getElementById("loadingBar") as HTMLElement;

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      this.redirectToNewComponent()
    }, 3000); // Delay duration in milliseconds, should match the duration of the loading animation
  }

  redirectToNewComponent() {
    this.router.navigate(['main-screen-lobby/']);
  }

}
