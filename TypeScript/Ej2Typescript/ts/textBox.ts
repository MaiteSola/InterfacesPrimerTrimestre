export class TextBox {
  private id: string = "";
  private label: string = "";
  private atributo: string = "";
  private html: HTMLInputElement | null = null; //Es para guardar

  constructor(id: string, label: string) {
    this.id = id;
    this.label = label;
  }

  public pintarTextBox() {
    let labelHTML = document.createElement("label") as HTMLLabelElement;
    labelHTML.textContent = this.label + ": ";
    labelHTML.setAttribute("for", this.id);
    document.body.appendChild(labelHTML);
    let textBox = document.createElement("input") as HTMLInputElement;
    textBox.id = this.id;
    document.body.appendChild(textBox);
    this.html = textBox;
  }

  public getElement(): HTMLInputElement | null {
    return this.html;
  }
}
