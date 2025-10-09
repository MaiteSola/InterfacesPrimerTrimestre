abstract class Boton {
  //label

  constructor(public id: string, public label: string, public data: any) {} //data es todo lo que necesita el boton para hacer accion

  public pintarBoton() {
    let btn = document.createElement("button") as HTMLButtonElement;
    btn.id = this.id;
    btn.innerText = this.label;
    btn.onclick = this.action.bind(this);
    document.body.appendChild(btn);
  }
  public abstract action(): void;
  //metodo abstracto action
}

export class BotonSaludar extends Boton {
  constructor(id: string, label: string, data: any) {
    super(id, label, data);
  }

  public action(): void {
    let elemento: HTMLInputElement = this.data;
    alert("Hola: " + elemento.value);
  }
}
