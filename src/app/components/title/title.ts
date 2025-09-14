import { Component, input } from '@angular/core';

@Component({
  selector: 'kdw-title',
  imports: [],
  templateUrl: './title.html',
  styles: ``,
})
export class Title {
  title = input.required<string>();
  subtitle = input.required<string>();
}
