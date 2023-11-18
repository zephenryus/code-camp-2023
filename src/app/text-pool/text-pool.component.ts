import { Component } from '@angular/core';
import { TextsService } from "../services/texts.service";

@Component({
  selector: 'app-text-pool',
  templateUrl: './text-pool.component.html',
  styleUrls: ['./text-pool.component.scss']
})
export class TextPoolComponent {
  enteredText = '';
  textPool: string[] = [];
  isTextsSubmitted: boolean = false;

  constructor(private textsService: TextsService) {
  }

  addToPool() {
    if (this.enteredText.trim() !== '') {
      this.textPool.push(this.enteredText.trim());
      this.enteredText = ''; // Clear the input after adding to the pool
    }
  }

  clearPool() {
    this.textPool = [];
  }

  submitTexts(): void {
    this.isTextsSubmitted = true;
    this.textsService.submitTexts(this.textPool).subscribe(() => {
      // response
    });
  }
}
