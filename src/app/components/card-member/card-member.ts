import { Component, input } from '@angular/core';

@Component({
  selector: 'kdw-card-member',
  imports: [],
  templateUrl: './card-member.html',
  styles: ``,
})
export class CardMember {
  name = input.required<string>();
  bio = input.required<string>();
  image = input.required<string>();
}
