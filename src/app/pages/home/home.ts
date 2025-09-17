import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CardMember } from '@src/app/components/card-member/card-member';
import { CardService } from '@src/app/components/card-service/card-service';
import { Card } from '@src/app/components/card/card';
import { Stepper } from '@src/app/components/stepper/stepper';
import { Title } from '@src/app/components/title/title';

@Component({
  selector: 'kdw-home',
  imports: [TranslatePipe, Title, Card, CardMember, CardService, Stepper],
  templateUrl: './home.html',
  styles: `
    main {
      background-image: url('/images/svg/main-bg.svg');
    }
  `,
})
export class Home {}
