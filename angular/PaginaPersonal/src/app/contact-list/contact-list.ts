import { Component, input, Input } from '@angular/core';
import { ContactModel } from '../models/contactModel';
import { ContactService } from '../services/contact-service';


@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss',
})
export class ContactList {


  //contactosAsync$!: Observable<ContactModel[]>;
  constructor(private contactService: ContactService) { }
  contactos: ContactModel[] = [];

  ngOnInit() {
    this.contactos = this.contactService.listarContactos();
    //this.contactosAsync$ = this.contactService.getContactos();
  }

  borrarContacto(id: string) {

    this.contactService.borrarContacto(id); // borrar en el servicio
    this.contactos = this.contactService.listarContactos(); // refrescar la lista
  }
}
