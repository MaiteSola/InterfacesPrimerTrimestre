import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Recetas } from "./recetas/recetas";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Recetas, Footer, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recetas');
}
