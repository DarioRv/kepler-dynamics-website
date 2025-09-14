import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { LanguageService } from '@src/app/services/language';
import { environment } from '@src/environments/environment';

@Component({
  selector: 'kdw-lang-selector',
  imports: [],
  templateUrl: './lang-selector.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangSelector {
  private _dropdownOpen = signal(false);
  private _selectedLang = signal(environment.defaultLanguage);
  private _languages = environment.laguages;
  private _langService = inject(LanguageService);

  languages = () => this._languages;
  dropdownOpen = () => this._dropdownOpen();
  selectedLang = computed(
    () => this._languages.find((l) => l.code === this._selectedLang()) || this._languages[0],
  );

  toggleDropdown() {
    this._dropdownOpen.update((open) => !open);
  }

  selectLang(code: string) {
    this._selectedLang.set(code);
    this._dropdownOpen.set(false);
    this._langService.setLanguage(code);
  }
}
