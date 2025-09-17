import { Component, inject } from '@angular/core';
import { LanguageService } from '@services/language';
import { Navbar } from './components/navbar/navbar';
import { Home } from './pages/home/home';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private translate = inject(LanguageService);
}
