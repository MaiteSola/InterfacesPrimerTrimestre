import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { ContactList } from "../contact-list/contact-list";
import { contactModel } from '../models/contactModel';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, ContactList],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  
  contactList: contactModel[] = [];

  addContact(newContact: contactModel) {
    this.contactList.push(newContact);
  }


}
