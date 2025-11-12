import { Routes } from '@angular/router';
import { ContenedorCards } from './contenedor-cards/contenedor-cards';
import { Form } from './form/form';

export const routes: Routes = [

 { path: 'frutas', component: ContenedorCards },
  { path: 'formulario', component: Form }

];
