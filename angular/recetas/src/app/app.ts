import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recetas } from "./recetas/recetas";

@Component({
  selector: 'app-root',
  imports: [Recetas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recetas');
}
