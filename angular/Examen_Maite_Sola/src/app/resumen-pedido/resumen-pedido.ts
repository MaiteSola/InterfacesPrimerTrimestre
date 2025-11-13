import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resumen-pedido',
  standalone:true,
  imports: [CurrencyPipe],
  templateUrl: './resumen-pedido.html',
  styleUrl: './resumen-pedido.scss',
})
export class ResumenPedido {
cantidad = input.required<number>();
  nombre = input.required<string>();
  precioTotal = input.required<number>();
// NUEVO: Evento para quitar
  quitar = output<void>();

}
