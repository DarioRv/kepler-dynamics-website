import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'kdw-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styles: `
    .border-gradient {
      border-image: linear-gradient(to right, var(--color-k-primary), var(--color-k-secondary)) 1;
    }
  `,
})
export class Footer {
  currentYear = new Date().getFullYear();
}
