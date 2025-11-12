import { Component, signal } from '@angular/core';

import { ContenedorCards } from './contenedor-cards/contenedor-cards';
import { modelCard } from './card/model/modelCard';
import { Menu } from "./menu/menu";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContenedorCards, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('PruebasExamen');

  //Aquí que es donde las voy a pintar hago el array
  cards: modelCard[] = [
    { titulo: 'Aguacate', descripcion: 'Fruta verde', imagen: '/img/aguacate.jpg' },
    { titulo: 'Manzana', descripcion: 'Roja y dulce', imagen: '/img/manzana.jpg' },
  ];

  mostrarMensaje(card: modelCard) {
    alert('has hecho click en ' + card.titulo);
  }
}
