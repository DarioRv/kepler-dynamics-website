import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Card } from '@src/app/components/card/card';
import { Title } from '@src/app/components/title/title';

@Component({
  selector: 'kdw-home',
  imports: [TranslatePipe, Title, Card],
  templateUrl: './home.html',
  styles: `
    main {
      background-image: url('/images/svg/main-bg.svg');
    }
  `,
})
export class Home {}
