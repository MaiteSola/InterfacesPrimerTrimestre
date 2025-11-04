import { Routes } from '@angular/router';
import { Recetas } from './recetas/recetas';
import { Footer } from './footer/footer';

export const routes: Routes = [
  { path: 'recetas', component: Recetas },
  { path: 'footer', component: Footer },
];
