import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  ngOnInit() {
    const loadingScreen = document.getElementById("loadingScreen") as HTMLElement;
    const loadingBar = document.getElementById("loadingBar") as HTMLElement;

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      // Your logic to navigate to the next page goes here
      // For Angular, use the router to navigate to the next page
      // Example: this.router.navigate(['/next-page']);
    }, 3000); // Delay duration in milliseconds, should match the duration of the loading animation
  }

}
