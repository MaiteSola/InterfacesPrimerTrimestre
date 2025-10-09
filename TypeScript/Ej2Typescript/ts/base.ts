import { BotonSaludar } from "./botones.js";
import { TextBox } from "./textBox.js";


var miTextBox = new TextBox("nombre","Dime un saludo"); //id + texto
miTextBox.pintarTextBox();
var miBoton = new BotonSaludar("miBoton", "Saludar", miTextBox.getElement());

miBoton.pintarBoton();

