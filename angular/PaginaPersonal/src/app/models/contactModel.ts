export class ContactModel {
  id?: string;        // <-- MockAPI lo genera automáticamente
  email: string;
  message: string;

  constructor(email: string, message: string, id?: string) {
    this.email = email;
    this.message = message;
    this.id = id;
  }
}
