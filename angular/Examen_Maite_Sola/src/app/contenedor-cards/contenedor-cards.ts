import { Component, signal } from '@angular/core';
import { Card } from "../card/card";
import { cardModel } from '../models/cardModel';

@Component({
  selector: 'app-contenedor-cards',
  standalone: true,
  imports: [Card],
  templateUrl: './contenedor-cards.html',
  styleUrl: './contenedor-cards.scss',
})
export class ContenedorCards {

   // Array de pizzas como signal
  pizzas = signal<cardModel[]>([
    {
      nombre: 'Margarita',
      precio: 8,
      foto: '/img/margarita.jpg',
      ingredientes: ['/img/tomate.jpg','/img/queso.jpg']
    },
    {
      nombre: 'Pepperoni',
      precio: 10,
      foto: '/img/peperoni.jpg',
      ingredientes: ['/img/tomate.jpg','/img/queso.jpg']
    },
    {
      nombre: 'Barbacoa',
      precio: 11,
      foto: '/img/barbacoa.jpg',
      ingredientes: ['/img/tomate.jpg','/img/queso.jpg']
    },
    {
      nombre: 'Carbonara',
      precio: 11,
      foto: '/img/carbonara.jpg',
      ingredientes: ['/img/tomate.jpg','/img/queso.jpg']
    }
  ]);

 // Maneja el evento de addToCart (ej. loguea, o usa un servicio de carrito)
  onAddToCart(event: { pizza: cardModel, cantidad: number }) {
    console.log(`Añadido: ${event.pizza.nombre} x ${event.cantidad}`);
    // Aquí: inyecta un CarritoService y llama a addItem(event.pizza, event.cantidad)
  }
}
