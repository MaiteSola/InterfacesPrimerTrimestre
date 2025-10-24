import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss'
})
export class Recetas {
 nombre = '';
  ingredientes: string[] = [];
  inputIngrediente = '';
  imagenPreview: string | ArrayBuffer | null = null;
  imagenArchivo: File | null = null;

  // --- Manejo de ingredientes tipo tags ---
  addIngrediente() {
    const nuevo = this.inputIngrediente.trim();
    if (nuevo && !this.ingredientes.includes(nuevo)) {
      this.ingredientes.push(nuevo);
    }
    this.inputIngrediente = '';
  }

  removeIngrediente(ing: string) {
    this.ingredientes = this.ingredientes.filter(i => i !== ing);
  }

  onIngredienteKey(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      this.addIngrediente();
    } else if (event.key === 'Backspace' && !this.inputIngrediente && this.ingredientes.length > 0) {
      this.removeIngrediente(this.ingredientes[this.ingredientes.length - 1]);
    }
  }

  // --- Manejo del archivo de imagen ---
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenArchivo = file;
      const reader = new FileReader();
      reader.onload = e => this.imagenPreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  // --- Envío del formulario ---
  guardarReceta() {
    console.log('Receta guardada:', {
      nombre: this.nombre,
      ingredientes: this.ingredientes,
      imagenArchivo: this.imagenArchivo
    });

    alert('Receta guardada correctamente 😋');
  }
  
}


// Validación del formulario
// var forms = document.querySelectorAll('.needs-validation')
// Array.prototype.slice.call(forms)
//   .forEach(function (form) {
//     form.addEventListener('submit', function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault()
//         event.stopPropagation()
//       }

//       form.classList.add('was-validated')
//     }, false)
//   })

