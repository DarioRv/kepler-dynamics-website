import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Accordeon } from '@src/app/components/accordeon/accordeon';
import { CardMember } from '@src/app/components/card-member/card-member';
import { CardService } from '@src/app/components/card-service/card-service';
import { Card } from '@src/app/components/card/card';
import { Stepper } from '@src/app/components/stepper/stepper';
import { Title } from '@src/app/components/title/title';

@Component({
  selector: 'kdw-home',
  imports: [TranslatePipe, Title, Card, CardMember, CardService, Stepper, Accordeon],
  templateUrl: './home.html',
  styles: `
    main {
      background-image: url('/images/svg/main-bg.svg');
    }
  `,
})
export class Home {
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(entries as Record<string, string>).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  }
}
