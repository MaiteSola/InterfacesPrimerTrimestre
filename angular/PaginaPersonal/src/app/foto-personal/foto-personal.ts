import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-foto-personal',
  imports: [],
  templateUrl: './foto-personal.html',
  styleUrl: './foto-personal.scss'
})
export class FotoPersonal {


 title = input("Title");
 srcImage = input("default.jpg"); //NO hace falta poner valores es por si no viene nada.

 mensajeClick = input("Pinchado en foto: ...")
 
 clickFoto = output<string>();//Al evento le podemos pasar lo que queraos, en este caso un string.

 //Creo el evento

 clickImagen() {
  this.clickFoto.emit(this.mensajeClick());

}
 




}
