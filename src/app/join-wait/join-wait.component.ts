import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { interval, switchMap } from "rxjs";

@Component({
  selector: 'app-join-wait',
  templateUrl: './join-wait.component.html',
  styleUrls: ['./join-wait.component.scss']
})
export class JoinWaitComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    interval(1000) // every 1000 milliseconds
        .pipe(
            switchMap(() => this.http.get('http://13.57.16.4:8080/game-ready-check'))
        )
        .subscribe(
            (response: any) => {
              console.log('Flag status:', response.flag);
              if (response.flag) {
                // Take action when the flag is set
              }
            },
            error => {
              console.error('Error:', error);
            }
        );
  }
}
