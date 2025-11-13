import { Component, computed, signal } from '@angular/core';
import { Card } from "../card/card";
import { cardModel } from '../models/cardModel';
import { CurrencyPipe } from '@angular/common';
import { Form } from '../formulario/form';

@Component({
  selector: 'app-contenedor-cards',
  standalone: true,
  imports: [Card,CurrencyPipe,Form],
  templateUrl: './contenedor-cards.html',
  styleUrl: './contenedor-cards.scss',
})
export class ContenedorCards {

   // Array de pizzas como signal
  pizzas = signal<cardModel[]>([
   {
    nombre: 'Margarita',
    precio: 8.50,
    // Usamos la versión .webp
    foto: '/img/margarita.webp',
    // Ingredientes inferidos
    ingredientes: ['/img/tomate.png', '/img/queso.jpg'],
  },
  {
    nombre: 'Pepperoni',
    precio: 10.99,
    // Usamos la versión .webp
    foto: '/img/peperoni.webp',
    // Ingredientes inferidos: Queso, pepperoni
    ingredientes: ['/img/queso.jpg', '/img/peperoni.jpg'],
  },
  {
    nombre: 'Barbacoa',
    precio: 11.50,
    // Usamos la versión .webp
    foto: '/img/barbacoa.webp',
    // Ingredientes inferidos: Queso, bacon, cebolla
    ingredientes: ['/img/queso.jpg', '/img/bacon.jpg', '/img/cebolla.jpg'],
  },
  {
    nombre: 'Carbonara',
    precio: 11.90,
    // Usamos la versión .jpg, ya que no hay .webp
    foto: '/img/carbonara.jpg',
    // Ingredientes inferidos: Queso, bacon, champis (champiñones)
    ingredientes: ['/img/queso.jpg', '/img/bacon.jpg', '/img/champis.webp'],
  },
  {
    nombre: 'Cuatro Quesos',
    precio: 12.25,
    // Usamos la versión .jpg, ya que no hay .webp
    foto: '/img/4quesos.jpg',
    // Ingredientes inferidos: Solo queso (por ser 4 quesos)
    ingredientes: ['/img/queso.jpg'],
  },
  {
    nombre: 'Vegetal',
    precio: 9.75,
    // Usamos la versión .jpg
    foto: '/img/vegetal.jpg',
    // Ingredientes inferidos: Tomate, cebolla, champiñones
    ingredientes: ['/img/tomate.png', '/img/cebolla.jpg', '/img/champis.webp'],
  },
  {
    nombre: 'Burrata',
    precio: 13.00,
    // Usamos la versión .webp
    foto: '/img/burrata.webp',
    // Ingredientes inferidos: Tomate, queso, burrata
    ingredientes: ['/img/tomate.png', '/img/queso.jpg', '/img/burrata.jpg'],
  }
  ]);

// Dentro de la clase ContenedorCards
carrito = signal<{ pizza: cardModel; cantidad: number }[]>([]);

// get total(): number {
//   return this.carrito().reduce((acc, item) => acc + item.pizza.precio * item.cantidad, 0);
// }
total = computed(() => 
  this.carrito().reduce((acc, item) => acc + item.pizza.precio * item.cantidad, 0)
);


onAddToCart(event: { pizza: cardModel; cantidad: number }) {
  if (event.cantidad <= 0) return;

  const actual = this.carrito();
  const indice = actual.findIndex(i => i.pizza.nombre === event.pizza.nombre);

  if (indice !== -1) {
    const nuevo = [...actual];
    nuevo[indice] = {
      ...nuevo[indice],
      cantidad: nuevo[indice].cantidad + event.cantidad
    };
    this.carrito.set(nuevo);
  } else {
    this.carrito.set([...actual, { pizza: event.pizza, cantidad: event.cantidad }]);
  }
}

// Quitar pizza del carrito
  quitarItem(pizzaNombre: string) {
    this.carrito.set(this.carrito().filter(i => i.pizza.nombre !== pizzaNombre));
  }

 //Conexion con carrito:

  limpiarCarrito() {
  this.carrito.set([]); // limpia el carrito
}

}
