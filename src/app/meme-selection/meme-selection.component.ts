import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { IMemeSearchResult } from "../interfaces/i-meme-search-result";
import { MemeSearch } from "../models/meme-search";
import { MemeService } from "../services/meme.service";

@Component({
  selector: 'app-meme-selection',
  templateUrl: './meme-selection.component.html',
  styleUrls: ['./meme-selection.component.scss']
})
export class MemeSelectionComponent {
    searchTerm: string = '';
    memeResults: IMemeSearchResult[] = [];

    constructor(private memeService: MemeService, private http: HttpClient) {
        this.memeService.getStarterMemes().subscribe(
            (data: MemeSearch[]) => {
                this.memeResults = data;
            },
            error => {
                // Handle the error here
            }
        );
    }

    searchMemes(): void {
        const query = encodeURIComponent(this.searchTerm);
        const url = `http://13.57.16.4:8080/search-memes?query=${query}`;
        this.memeResults = [];

        this.http.get<MemeSearch[]>(url).subscribe(
            (data: MemeSearch[]) => {
                for (let item of data) {
                    console.log(item);
                    this.memeResults.push(new MemeSearch(item));
                }
            },
            (error: any) => {
                console.log("There was an error!", error);
            }
        )
    }
}
