import { Component } from '@angular/core';

@Component({
  selector: 'app-word-carousel',
  template: `
    <div class="carousel-container">
      <button class="arrow-button left" (click)="prevWord()">‹</button>
      <div class="word-container">
        {{ currentWord }}
      </div>
      <button class="arrow-button right" (click)="nextWord()">›</button>
    </div>
  `,
  styleUrls: ['./word-carousel.component.scss']
})
export class WordCarouselComponent {
  words: string[] = [
    'Word Set 1',
    'Word Set 2',
    'Word Set 3',
    'Word Set 4',
  ];
  currentWordIndex: number = 0;

  get currentWord(): string {
    return this.words[this.currentWordIndex];
  }

  nextWord() {
    this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
  }

  prevWord() {
    this.currentWordIndex = (this.currentWordIndex - 1 + this.words.length) % this.words.length;
  }
}
