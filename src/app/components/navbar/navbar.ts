import { Component } from '@angular/core';
import { LangSelector } from '../lang-selector/lang-selector';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'kdw-navbar',
  imports: [LangSelector, TranslatePipe],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {}
