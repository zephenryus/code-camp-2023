// battlescreen.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-battlescreen',
  template: `
    <div class="center-container">
      <app-meme [imageUrl]="meme1Url"></app-meme>
      <div class="gap"></div>
      <app-meme [imageUrl]="meme2Url"></app-meme>
    </div>
  `,
  styles: [
    '.center-container { display: flex; justify-content: center; align-items: center; height: 100vh; }',
    '.meme-container { display: flex; }',
    '.gap { width: 120px; }' // Adjust the width of the gap according to your preference
  ]
})
export class BattlescreenComponent {
  meme1Url = 'https://cdn.guff.com/site_0/media/33000/32428/items/70d6385aaf7fc58ccd60ed8f.jpg'; // Replace with the actual URL of your meme images
  meme2Url = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e5c0eb54-256d-4330-bdfe-289f35dc0015/deayzbj-9742ab3b-b27a-47d0-b7ae-da7a6028f2d9.png/v1/fill/w_776,h_435,q_80,strp/a_dumb_meme_i_made_by_randomguy187_deayzbj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM1IiwicGF0aCI6IlwvZlwvZTVjMGViNTQtMjU2ZC00MzMwLWJkZmUtMjg5ZjM1ZGMwMDE1XC9kZWF5emJqLTk3NDJhYjNiLWIyN2EtNDdkMC1iN2FlLWRhN2E2MDI4ZjJkOS5wbmciLCJ3aWR0aCI6Ijw9Nzc2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.H51ZrwUAAMlZ2bvOgS0QSX2jCw-yw3r6YhkPHV6vtdc';
}
