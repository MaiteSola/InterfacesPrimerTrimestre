export class TextBox {
    id = "";
    label = "";
    atributo = "";
    html = null; //Es para guardar
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
    pintarTextBox() {
        let labelHTML = document.createElement("label");
        labelHTML.textContent = this.label + ": ";
        labelHTML.setAttribute("for", this.id);
        document.body.appendChild(labelHTML);
        let textBox = document.createElement("input");
        textBox.id = this.id;
        document.body.appendChild(textBox);
        this.html = textBox;
    }
    getElement() {
        return this.html;
    }
}
//# sourceMappingURL=textBox.js.map