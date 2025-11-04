import { Component, input, Input } from '@angular/core';
import { contactModel } from '../models/contactModel';


@Component({
  selector: 'app-contact-list',
  imports: [],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.scss'
})
export class ContactList {

@Input() contacts: contactModel[] = [];
  contactos = input<contactModel>();  

}
