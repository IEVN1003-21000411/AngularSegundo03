import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temh',
  imports: [],
  templateUrl: './temh.component.html',
  styleUrl: './temh.component.css'
})
export class TemhComponent {
  @Input() mensaje!:string;//La variable debe de ser declarada primero para que el papa pueda mandarle los datos al hijo

  @Output() menaje2 = new EventEmitter<string>();//Estamos haciendo una declaracion de una variable en donde va resibir un mensaje desde un evento

  enviarMensaje(){
    this.menaje2.emit("Mensaje desde Temh Component");//Usamos la variable para alamacenar el mensaje
  }

}
