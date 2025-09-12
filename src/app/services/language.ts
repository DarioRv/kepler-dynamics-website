import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly defaultLang = environment.defaultLanguage;
  readonly supportedLangs = environment.supportedLanguages;

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setFallbackLang(this.defaultLang);
    this.translate.use(this.defaultLang);

    // Detect browser language
    if (inject(PLATFORM_ID) === 'browser') {
      const browserLang = this.translate.getBrowserLang();
      console.log('browserLang', browserLang);
    }

    console.log('Using language:', this.defaultLang);
  }
}
