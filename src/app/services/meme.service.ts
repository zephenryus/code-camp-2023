import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from "rxjs";
import { IMemeSearchResult } from "../interfaces/i-meme-search-result";
import { MemeSearch } from "../models/meme-search";

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  memeResults: IMemeSearchResult[] = [];

  constructor(private http: HttpClient) { }

    getStarterMemes(): Observable<MemeSearch[]> {
        const url = `http://13.57.16.4:8080/starting-memes`;

        return this.http.get<MemeSearch[]>(url).pipe(
            map((data: MemeSearch[]) => data.map(item => new MemeSearch(item))),
            catchError(error => {
                console.log("There was an error!", error);
                return throwError(error); // Handle or throw the error
            })
        );
    }

    submitMemes(selectedMemes: any[]): Observable<any> {
        const url = `http://13.57.16.4:8080/save-selected-memes`;

        return this.http.post(url, {
            playerId: 1,
            memeIds: selectedMemes.filter(a => a.id)
        });
    }
}
