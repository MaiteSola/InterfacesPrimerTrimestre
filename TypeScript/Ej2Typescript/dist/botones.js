class Boton {
    id;
    label;
    data;
    //label
    constructor(id, label, data) {
        this.id = id;
        this.label = label;
        this.data = data;
    } //data es todo lo que necesita el boton para hacer accion
    pintarBoton() {
        let btn = document.createElement("button");
        btn.id = this.id;
        btn.innerText = this.label;
        btn.onclick = this.action.bind(this);
        document.body.appendChild(btn);
    }
}
export class BotonSaludar extends Boton {
    constructor(id, label, data) {
        super(id, label, data);
    }
    action() {
        let elemento = this.data;
        alert("Hola: " + elemento.value);
    }
}
//# sourceMappingURL=botones.js.map