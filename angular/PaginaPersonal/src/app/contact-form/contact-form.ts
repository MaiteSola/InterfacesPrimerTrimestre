import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactModel } from '../models/contactModel';
import { ContactService } from '../services/contact-service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  constructor(private ContactService: ContactService) { }
  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }

  sendMessage() {
    if (this.contactForm.valid) {
      const newContact: ContactModel = this.contactForm.value as ContactModel;
      //this.contactSubmitted.emit(newContact); // ← EMITIMOS
      this.ContactService.anadirContacto(newContact);
      this.contactForm.reset(); // ← Limpiamos
    }
  }
}
