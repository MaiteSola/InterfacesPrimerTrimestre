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
 
 clickFoto = output<string>();//Al evento le podemos pasar lo que queraos, en este caso un string.

 //Creo el evento

 clickImagen() {
  this.clickFoto.emit("Pinchado en foto: "+this.title());

}
 




}
