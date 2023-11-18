import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { IMemeSearchResult } from "../interfaces/i-meme-search-result";
import { MemeSearch } from "../models/meme-search";
import { MemeService } from "../services/meme.service";

@Component({
    selector: "app-meme-selection",
    templateUrl: "./meme-selection.component.html",
    styleUrls: ["./meme-selection.component.scss"],
})
export class MemeSelectionComponent {
    searchTerm: string = "";
    memeResults: IMemeSearchResult[] = [];
    selectedMemes: any[] = [];
    isMemesSubmitted = false;

    constructor(private memeService: MemeService, private http: HttpClient) {
        this.memeService.getStarterMemes().subscribe(
            (data: MemeSearch[]) => {
                this.memeResults = data;
            },
            error => {
                // Handle the error here
            },
        );
    }

    searchMemes(): void {
        const query = encodeURIComponent(this.searchTerm);
        const url = `http://13.57.16.4:8080/search-memes?query=${ query }`;
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
            },
        );
    }

    selectMeme(meme: MemeSearch): void {
        console.log(this.selectedMemes);
        if (this.selectedMemesCount() < 5) {
            meme.selected = ! meme.selected;
            // Update selectedMemes array based on the selection status
            if (meme.selected) {
                this.selectedMemes.push(meme);
            } else {
                const index = this.selectedMemes.findIndex((selectedMeme) => selectedMeme.id === meme.id);
                if (index !== -1) {
                    this.selectedMemes.splice(index, 1);
                }
            }
        }
    }

    isSelected(meme: MemeSearch): boolean {
        return this.selectedMemes.some((selectedMeme) => selectedMeme.id === meme.id);
    }


    selectedMemesCount(): number {
        return this.memeResults.filter((meme) => meme.selected).length;
    }

    submitMemes(): void {
        this.isMemesSubmitted = true;
        this.memeService.submitMemes(this.selectedMemes).subscribe((response) => {
            // response
        });
    }
}

