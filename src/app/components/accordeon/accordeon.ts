import { Component, input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgClass } from '@angular/common';

@Component({
  selector: 'kdw-accordeon',
  imports: [NgClass],
  templateUrl: './accordeon.html',
  styles: ``,
  animations: [
    trigger('collapseExpand', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          overflow: 'hidden',
        }),
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        }),
      ),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class Accordeon {
  isOpen = false;
  title = input.required<string>();

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
