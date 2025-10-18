import { Component } from '@angular/core';
import { TemhComponent } from "../temh/temh.component";

@Component({
  selector: 'app-temp',
  imports: [TemhComponent],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {
  title:string = 'Hola desde papa';

  mensaje2:string = '';
  recibirMensaje(event:string){//Creamos una funcione donde va resibir una propiedad llamada evente que es string
    this.mensaje2=event
  }
}
