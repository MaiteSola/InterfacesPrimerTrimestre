import { Component } from '@angular/core';

import { modelCard } from '../card/model/modelCard';
import { Card } from '../card/card';

@Component({
  selector: 'app-contenedor-cards',
  imports: [Card],
  templateUrl: './contenedor-cards.html',
  styleUrl: './contenedor-cards.scss',
})
export class ContenedorCards {
  //Aquí que es donde las voy a pintar hago el array

  cards: modelCard[] = [];

  constructor() {
    const saved = localStorage.getItem('cards');
    if (saved) {
      this.cards = JSON.parse(saved);
    } else {
      this.cards = [
        { titulo: 'Aguacate', descripcion: 'Fruta verde', imagen: '/img/aguacate.jpg' },
        { titulo: 'Manzana', descripcion: 'Roja y dulce', imagen: '/img/manzana.jpg' },
        { titulo: 'Kaki', descripcion: 'Fruta maravilla', imagen: '/img/kaki.jpg' },
        { titulo: 'Kiwi', descripcion: 'verde', imagen: '/img/kiwi.jpg' },
        { titulo: 'mandarina', descripcion: 'Fruta verde', imagen: '/img/mandarina.jpg' },
        { titulo: 'mango', descripcion: 'Roja y dulce', imagen: '/img/mango.jpg' },
      ];
    }
  }

  mostrarMensaje(card: modelCard) {
    alert('has hecho click en ' + card.titulo);
  }

  //Recibe lo emitido del borrado y borra esa card
  borrarCard(card: modelCard) {
    this.cards = this.cards.filter((c) => c !== card);
    localStorage.setItem('cards', JSON.stringify(this.cards)); //se guarda en storage
  }

  recibirCard(card: modelCard) {
    this.cards.push(card);
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }
}
