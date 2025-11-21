import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contactModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }



  contactosRealizados: ContactModel[] = [];

  anadirContacto(contacto: ContactModel) {
    // Envías el contacto a la API
    this.http.post<ContactModel>('https://6790ccf7af8442fd7377c747.mockapi.io/contacts', contacto)

      // Cuando la API responde…
      .subscribe((contacto) => {

        // nuevoContacto = contacto creado, incluyendo el ID
        this.contactosRealizados.push(contacto);
        alert('Contact created: ' + JSON.stringify(contacto));
      });

  }

  //Para hacer con observable
  // getContactos(): Observable<ContactModel[]> {
  //   return this.http.get<ContactModel[]>('https://6790ccf7af8442fd7377c747.mockapi.io/contacts');
  // }

  borrarContacto(id: string) {
    // Envías la solicitud DELETE a la API
    this.http
      .delete<void>(`https://6790ccf7af8442fd7377c747.mockapi.io/contacts/${id}`)
      .subscribe(() => {
        // Eliminar el contacto del array local
        this.contactosRealizados = this.contactosRealizados.filter(c => c.id !== id);

        // Mensaje opcional
        alert('Contact deleted: ' + id);
      });
  }


  listarContactos(): ContactModel[] {

    this.http
      .get('https://6790ccf7af8442fd7377c747.mockapi.io/contacts', { observe: 'response' })
      .subscribe((r) => {
        console.log('Response status:', r.status);
        console.log('Body:', r.body);
        this.contactosRealizados = r.body as any[];
      });

    return this.contactosRealizados;

  }

}
