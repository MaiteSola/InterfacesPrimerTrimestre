import { Injectable } from '@angular/core';
import { FotoPerfilModel } from '../models/fotoPersonalModel';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http: HttpClient) {}

photos: FotoPerfilModel[] = [];
listarPerfiles(): FotoPerfilModel[]{

  this.http
      .get('https://6790ccf7af8442fd7377c747.mockapi.io/profiles', { observe: 'response' })
      .subscribe((res) => {
        console.log('Response status:', res.status);
        console.log('Body:', res.body);
        this.photos = res.body as any[];
      });

      return this.photos;


  }
  
}
