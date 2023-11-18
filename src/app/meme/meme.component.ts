// meme.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meme',
  template: `<img [src]="imageUrl" alt="Meme" class="meme-image">`,
  styles: ['.meme-image { width: 600px; height: 600px; }']
})
export class MemeComponent {
  @Input() imageUrl: string = '';
}
