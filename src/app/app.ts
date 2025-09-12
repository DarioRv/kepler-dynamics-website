import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '@services/language';

@Component({
  selector: 'app-root',
  imports: [TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private translate = inject(LanguageService);
}
