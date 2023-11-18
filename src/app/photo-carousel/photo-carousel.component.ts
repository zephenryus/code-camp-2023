import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-carousel',
  template: `
    <div class="carousel-container">
      <button class="arrow-button left" (click)="prevPhoto()">‹</button>
      <div class="photo-container">
        <img [src]="currentPhoto" alt="Filler Photo" />
      </div>
      <button class="arrow-button right" (click)="nextPhoto()">›</button>
    </div>
  `,
  styleUrls: ['./photo-carousel.component.scss']
})
export class PhotoCarouselComponent {
  photos: string[] = [
    'url-to-photo-1',
    'url-to-photo-2',
    'url-to-photo-3',
    'url-to-photo-4',
  ];
  currentPhotoIndex: number = 0;

  get currentPhoto(): string {
    return this.photos[this.currentPhotoIndex];
  }

  nextPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photos.length;
  }

  prevPhoto() {
    this.currentPhotoIndex = (this.currentPhotoIndex - 1 + this.photos.length) % this.photos.length;
  }
}
