import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  joinLatestGame(): Observable<any> {
    const url = 'http://13.57.16.4:8080/join-latest-game';
    return this.http.get(url);
  }

  updateGamePhase(phase: number): Observable<any> {
      const url = 'http://13.57.16.4:8080/update-game-phase';
      // Your HTTP request logic here
      return this.http.post(url, {
        gameId: localStorage.getItem('gameId'),
        completedPhase: phase
      });
  }
}
