import { Component, signal } from '@angular/core';
//import { Profile } from "./profile/profile";

import { Profile } from "./profile/profile";
import { FotoPersonal } from "./foto-personal/foto-personal";
import { Navbar } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Profile, FotoPersonal, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PaginaPersonal');
}
