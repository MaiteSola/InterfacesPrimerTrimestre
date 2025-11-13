import { Component, input, output, signal } from '@angular/core';
import { cardModel } from '../models/cardModel';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumenPedido } from '../resumen-pedido/resumen-pedido';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe,FormsModule,ResumenPedido],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
pizza = input<cardModel>();
  addToCart = output<{ pizza: cardModel, cantidad: number }>();

  // CANTIDAD EMPIEZA EN 1
  cantidad = signal(0);

  // Resumen
  mostrarResumen = signal(false);
  resumenCantidad = signal(0);
  resumenNombre = signal('');
  resumenPrecioTotal = signal(0);

  get cantidadValue() { return this.cantidad(); }
  set cantidadValue(val: number) {
    // No permitimos valores menores a 1
    const nuevoValor = val < 1 ? 1 : val;
    this.cantidad.set(nuevoValor);
  }

  onAddToCart() {
    const cant = this.cantidad();

    if (cant < 1) {
      alert('Debes seleccionar al menos 1 pizza');
      return;
    }

    // Emitir al carrito
    this.addToCart.emit({ pizza: this.pizza()!, cantidad: cant });

    // MOSTRAR RESUMEN solo si cantidad > 1
    if (cant > 1) {
      this.resumenCantidad.set(cant);
      this.resumenNombre.set(this.pizza()!.nombre);
      this.resumenPrecioTotal.set(cant * this.pizza()!.precio);
      this.mostrarResumen.set(true);
    } else {
      this.mostrarResumen.set(false);
    }

    // RESETEAR A 1 (no a 0)
    this.cantidad.set(1);
  }

  // NUEVO: Quitar resumen
  quitarResumen() {
    this.mostrarResumen.set(false);
  }
}
