import { Component, output } from '@angular/core';
import { modelCard } from '../card/model/modelCard';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {

  constructor(private router: Router){}
  // FormGroup con controles y validaciones
  cardForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    imagen: new FormControl('', [Validators.required]),
  });

  //output para emitir la info del formulario
  cardAdded = output<modelCard>();

   agregarCard() {
    if (this.cardForm.valid) {
      const nuevaCard: modelCard = {
        id: Date.now(),
        titulo: this.cardForm.value.titulo!,
        descripcion: this.cardForm.value.descripcion!,
        imagen: this.cardForm.value.imagen!,
      };

      // Emitimos la nueva card al contenedor
      this.cardAdded.emit(nuevaCard);

      // Guardamos en localStorage
      const saved = localStorage.getItem('cards');
      const cards = saved ? JSON.parse(saved) : [];
      cards.push(nuevaCard);
      localStorage.setItem('cards', JSON.stringify(cards));

      this.cardForm.reset();

      // Redirigir a "frutas"
      this.router.navigate(['/frutas']);
    } else {
      alert('Completa todos los campos');
    }
  }
}
