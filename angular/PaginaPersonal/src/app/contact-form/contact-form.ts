import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { contactModel } from '../models/contactModel';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  //@Output() contactSubmitted = new EventEmitter<contactModel>(); // ← EVENTO
  contactSubmitted = output<contactModel>();
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
      const newContact: contactModel = this.contactForm.value as contactModel;
      this.contactSubmitted.emit(newContact); // ← EMITIMOS
      this.contactForm.reset(); // ← Limpiamos
    }
  }
}
