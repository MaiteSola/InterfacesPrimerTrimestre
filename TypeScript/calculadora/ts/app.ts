import * as c from "./calculadora.js";

const inputNum1: HTMLInputElement = document.getElementById(
  "num1"
)! as HTMLInputElement;
const inputNum2: HTMLInputElement = document.getElementById(
  "num2"
)! as HTMLInputElement;
let operador1: number = Number(inputNum1.value);
let operador2: number = Number(inputNum2.value);
const form = document.getElementById("calculadora") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLTextAreaElement;

document.getElementById("btnCalcular")?.addEventListener("click", () => {
  let operador = document.getElementById("operador") as HTMLSelectElement;
  let value = operador.value;
  let operacion = 0;

  if (validarTexto(inputNum1) && validarTexto(inputNum2)) {
    switch (value) {
      case "sumar":
        operacion = c.sumar(operador1, operador2);
        resultado.textContent = "Es " + operacion;

      case "restar":
        operacion = c.restar(operador1, operador2);
        resultado.textContent = "Es " + operacion;

      case "multiplicar":
        operacion = c.multiplicar(operador1, operador2);
        resultado.textContent = "Es " + operacion;

      case "dividir":
        operacion = c.dividir(operador1, operador2);
        resultado.textContent = "Es " + operacion;
    }
  }
});

function validarTexto(elemento: HTMLInputElement): boolean {
  if (elemento.value === "" || isNaN(Number(elemento.value))) {
    alert("Introduce un número");
    elemento.value = "";
    elemento.focus();
    return false;
  }
  return true;
}

document.getElementById("btnBorrar")?.addEventListener("click", () => {
  form.reset();
});
