import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { interval, switchMap } from "rxjs";
import { GameService } from "../services/game.service";

@Component({
  selector: 'app-join-wait',
  templateUrl: './join-wait.component.html',
  styleUrls: ['./join-wait.component.scss']
})
export class JoinWaitComponent {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    interval(1000) // every 1000 milliseconds
        .pipe(
            switchMap(() => this.http.get('http://13.57.16.4:8080/game-ready-check'))
        )
        .subscribe(
            (response: any) => {
              console.log('Flag status:', response.flag);
              if (response) {
                this.router.navigate(['/small-screen/text-entry-intro']);
              }
            },
            error => {
              console.error('Error:', error);
            }
        );
  }
}
