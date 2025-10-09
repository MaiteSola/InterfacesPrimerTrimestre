function holaMundo(nombre: string) {
  return "Hola Mundo!! Soy " + nombre;
}
let nombre = "Maite Sola";
const container = document.getElementById("container");
if (container) {
  container.innerHTML = holaMundo(nombre);
}

let myBoolean: boolean = true;
let example: {
  name: string;
  id: number;
  collection: string[];
} = {
  name: "Example",
  id: 5,
  collection: ["a", "b", "c"],
};

function devuelveNumero(num: number): string {
  return "Número devuelto " + num;
} //Puedes tipar una función

function devuelveNumeroNoNegativo(num: number): any {
  if (num >= 0) {
    return num;
  } else {
    return "Número negativo: " + num;
  }
} //puede incluso devolver any
