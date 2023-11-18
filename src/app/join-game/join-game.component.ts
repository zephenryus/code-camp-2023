import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent implements OnInit {

  ngOnInit() {
    fetch('http://13.57.16.4:8080/login')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('hash', data.hash);
        })
        .catch(error => console.error('Error:', error));

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
