import { Component, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cardModel } from '../models/cardModel';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.scss'],
})
export class Form {

// Datos del formulario
  horaEntrega = signal('');
  direccion = signal('');
  metodoPago = signal('tarjeta'); // por defecto tarjeta
  tarjeta = signal('');
  movil = signal('');

  // Mensajes de error
  errorHora = signal('');
  errorDireccion = signal('');
  errorPago = signal('');
  mensajeFinal = signal('');

  validarFormulario(): boolean {
  // Limpiar errores previos
  this.errorHora.set('');
  this.errorDireccion.set('');
  this.errorPago.set('');

  // Hora de entrega
  if (!this.horaEntrega().trim()) {
    this.errorHora.set('Debe seleccionar una hora de entrega');
    return false; // detener validación
  }

  // Dirección
  if (!this.direccion().trim()) {
    this.errorDireccion.set('Debe introducir la dirección');
    return false; // detener validación
  }

  // Método de pago
  if (this.metodoPago() === 'tarjeta') {
    if (!/^\d{16}$/.test(this.tarjeta())) {
      this.errorPago.set('La tarjeta debe tener 16 dígitos');
      return false; // detener validación
    }
  }

  if (this.metodoPago() === 'bizum') {
    if (!/^\d{9}$/.test(this.movil())) {
      this.errorPago.set('El móvil debe tener 9 dígitos');
      return false; // detener validación
    }
  }

  // Todo correcto
  return true;
}

  //pagar
 // Acción de pagar
 pagar() {
  if (!this.validarFormulario()) return;

  this.mensajeFinal.set('¡Gracias por su pedido!');

  // Resetear
  this.horaEntrega.set('');
  this.direccion.set('');
  this.tarjeta.set('');
  this.movil.set('');
  this.metodoPago.set('tarjeta');

  // EMITIR AL PADRE
  this.pagoRealizado.emit();
}

  // Método que se llama al cambiar el select
cambiarMetodoPago(nuevo: string) {
  this.metodoPago.set(nuevo);
  this.errorPago.set(''); // limpiar errores de pago al cambiar
}

//Conectar con resumen
carrito = input.required<{ pizza: cardModel; cantidad: number }[]>();
//avisar al contenedor al pagar
pagoRealizado = output<void>();

}
