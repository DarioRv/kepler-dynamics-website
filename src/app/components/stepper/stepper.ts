import { Component, input } from '@angular/core';

interface Step {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'kdw-stepper',
  imports: [],
  templateUrl: './stepper.html',
  styles: `
    .dashed {
      border-image: repeating-linear-gradient(
          to bottom,
          var(--color-k-primary) 0 10px,
          /* dash de 10px */ transparent 4px 10px /* espacio de 10px */
        )
        30;
    }
  `,
})
export class Stepper {
  steps = input.required<Step[]>();
}
