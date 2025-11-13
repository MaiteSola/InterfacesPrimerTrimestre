import { Component, input, output, signal } from '@angular/core';
import { cardModel } from '../models/cardModel';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe,FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
pizza = input<cardModel>();
  addToCart = output<{ pizza: cardModel, cantidad: number }>();

  // CANTIDAD EMPIEZA EN 0
  cantidad = signal(0);

  // Resumen
  mostrarResumen = signal(false);
  resumenCantidad = signal(0);
  resumenNombre = signal('');
  resumenPrecioTotal = signal(0);

  get cantidadValue() { return this.cantidad(); }
  set cantidadValue(val: number) {
    // Permitimos 0 o cualquier número positivo
    const nuevoValor = val < 0 ? 0 : val;
    this.cantidad.set(nuevoValor);
  }

   onAddToCart() {
    const cant = this.cantidad();

    // No añadir si la cantidad es 0
    if (cant === 0) {
      alert('Debes seleccionar al menos 1 pizza para añadir al carrito');
      return;
    }

    // Emitir al carrito
    this.addToCart.emit({ pizza: this.pizza()!, cantidad: cant });

    // MOSTRAR RESUMEN solo si cantidad > 1
    if (cant > 0) {
      this.resumenCantidad.set(cant);
      this.resumenNombre.set(this.pizza()!.nombre);
      this.resumenPrecioTotal.set(cant * this.pizza()!.precio);
      this.mostrarResumen.set(true);
    } else {
      this.mostrarResumen.set(false);
    }

    // RESETEAR A 1 (no a 0)
    this.cantidad.set(0);
  }
  
}
