import { Component } from '@angular/core';

@Component({
  selector: 'app-text-pool',
  templateUrl: './text-pool.component.html',
  styleUrls: ['./text-pool.component.scss']
})
export class TextPoolComponent {
  enteredText = '';
  textPool: string[] = [];

  addToPool() {
    if (this.enteredText.trim() !== '') {
      this.textPool.push(this.enteredText.trim());
      this.enteredText = ''; // Clear the input after adding to the pool
    }
  }

  clearPool() {
    this.textPool = [];
  }
}
