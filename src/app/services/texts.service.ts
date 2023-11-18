import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor(private http: HttpClient) { }

  submitTexts(textPool: string[]): any {
    const url = `http://13.57.16.4:8080/save-text-pool`;

    return this.http.post(url, {
      playerId: localStorage.getItem('hash'),
      textPool: textPool
    });
  }
}
