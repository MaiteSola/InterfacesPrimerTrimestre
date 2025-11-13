import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { ContenedorCards } from "./contenedor-cards/contenedor-cards";
import { Form } from "./form/form";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ContenedorCards, Form],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Examen_Maite_Sola');
}
