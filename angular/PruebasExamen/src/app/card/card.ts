import { Component, input, output } from '@angular/core';
import { modelCard } from './model/modelCard';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  //Aquí vamos a recibir un objeto del tipo modelCard y cuando pinchemos sobre el puede emitir un evento.

  info = input.required<modelCard>(); //input
  cardClick = output<modelCard>(); //Evento de clickar
  deleteClick = output<modelCard>(); //Evento de borrar

  onClick() {
    this.cardClick.emit(this.info()); //Emite la información que recibe del modelCard
  }

  //Método de borrar
  onDelete(event: Event) {
    event.stopPropagation(); //No se dispara el onclick
    this.deleteClick.emit(this.info());
  }
}
