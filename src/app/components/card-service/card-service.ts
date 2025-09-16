import { Component, input } from '@angular/core';

@Component({
  selector: 'kdw-card-service',
  imports: [],
  templateUrl: './card-service.html',
  styles: ``,
})
export class CardService {
  title = input.required<string>();
  description = input.required<string>();
  icon = input.required<string>();
}
