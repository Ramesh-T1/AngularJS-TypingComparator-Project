import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TypingProject';
  enteredText: any = '';
  randomText = (Math.random() * 1000).toFixed(8);
  onInput(event: Event): void {
    this.enteredText = (event.target as HTMLInputElement).value;
  }
  compare(alpha: any, et: any) {
    if (!et) {
      return 'pending';
    }
    return alpha === et ? 'correct' : 'incorrect';
  }
}
