import { Component, inject } from '@angular/core';
import { LanguageService } from '@services/language';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private translate = inject(LanguageService);
}
