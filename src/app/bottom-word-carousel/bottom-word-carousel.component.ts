import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-word-carousel',
  template: `
    <div class="carousel-container">
      <button class="arrow-button left" (click)="prevWord()">‹</button>
      <div class="word-container">
        {{ currentWord }}
      </div>
      <button class="arrow-button right" (click)="nextWord()">›</button>
    </div>
  `,
  styleUrls: ['./bottom-word-carousel.component.scss']
})
export class BottomWordCarouselComponent {
  words: string[] = [
    'Bottom Word Set 1',
    'Bottom Word Set 2',
    'Bottom Word Set 3',
    'Bottom Word Set 4',
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
