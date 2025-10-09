"use strict";
function holaMundo(nombre) {
    return "Hola Mundo!! Soy " + nombre;
}
let nombre = "Maite Sola";
const container = document.getElementById("container");
if (container) {
    container.innerHTML = holaMundo(nombre);
}
let myBoolean = true;
let example = {
    name: "Example",
    id: 5,
    collection: ["a", "b", "c"],
};
function devuelveNumero(num) {
    return "Número devuelto " + num;
} //Puedes tipar una función
function devuelveNumeroNoNegativo(num) {
    if (num >= 0) {
        return num;
    }
    else {
        return "Número negativo: " + num;
    }
} //puede incluso devolver any
//# sourceMappingURL=prueba.js.map