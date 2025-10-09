import * as c from "./calculadora.js";
const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
let operador1 = Number(inputNum1.value);
let operador2 = Number(inputNum2.value);
const form = document.getElementById("calculadora");
const resultado = document.getElementById("resultado");
document.getElementById("btnCalcular")?.addEventListener("click", () => {
    let operador = document.getElementById("operador");
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
function validarTexto(elemento) {
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
//# sourceMappingURL=app.js.map