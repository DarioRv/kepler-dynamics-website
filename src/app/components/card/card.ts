import { Component, input } from '@angular/core';

@Component({
  selector: 'kdw-card',
  imports: [],
  templateUrl: './card.html',
  styles: `
    .border-gradient {
      border-image: linear-gradient(to right, var(--color-k-primary), var(--color-k-secondary)) 1;
    }
  `,
})
export class Card {
  title = input.required<string>();
  text = input.required<string>();
}
