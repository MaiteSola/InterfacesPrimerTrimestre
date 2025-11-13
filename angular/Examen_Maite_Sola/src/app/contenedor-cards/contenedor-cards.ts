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

 // Maneja el evento de addToCart (ej. loguea, o usa un servicio de carrito)
  onAddToCart(event: { pizza: cardModel, cantidad: number }) {
    console.log(`Añadido: ${event.pizza.nombre} x ${event.cantidad}`);
    // Aquí: inyecta un CarritoService y llama a addItem(event.pizza, event.cantidad)
  }
}
