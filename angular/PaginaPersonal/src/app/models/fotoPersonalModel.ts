// Nos creamos nuestra clase con los parametros que le queremos pasar
export class FotoPerfilModel {
 nombre: string;
 foto: string;
 mensajeClick: string;

 constructor(nombre: string, foto: string, mensajeClick: string) {
 this.nombre = nombre;
 this.foto = foto;
 this.mensajeClick = mensajeClick;
 }
}
