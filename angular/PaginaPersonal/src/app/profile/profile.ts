import { Component, signal, SimpleChanges } from '@angular/core';
import { FotoPersonal } from '../foto-personal/foto-personal';
import { FotoPerfilModel } from '../models/fotoPersonalModel';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile-service';
@Component({
  selector: 'app-profile',
  imports: [FotoPersonal, UpperCasePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  title = 'Maite Sola';
  esOculto = signal(false);
  titleBoton = signal('Ocultar'); //arreglar
  photoTitle = ''; //Me lo tengo que cargar pero hay que arreglar las cosas
  photoSrc = '';
  imagenClickeada = '';

  photos: FotoPerfilModel[] = [];

  //Con esto ya tengo un cliente
  constructor(private http: HttpClient , private profileService: ProfileService) {}
  
  ngOnInit() {
    //Hago la llamada a la api para tener la lista de perfiles
 this.photos = this.profileService.listarPerfiles();
   
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Ha cambiado algo de la página');
  }

  ngOnDestroy() {
    this.photos = [];
  }

  toggleName() {
    this.esOculto.set(!this.esOculto());
    if (this.titleBoton() == 'Ocultar') {
      this.titleBoton.set('Mostrar');
    } else {
      this.titleBoton.set('Ocultar');
    }
  }

  ensenarClick(event: string) {
    this.imagenClickeada = event;
  }
}
