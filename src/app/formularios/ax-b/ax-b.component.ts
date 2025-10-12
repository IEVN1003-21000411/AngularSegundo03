import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassAxB } from './class-ax-b';

@Component({
  selector: 'app-ax-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})
export class AxBComponent {
  resultado!: number;
  formulario!: FormGroup;

  calcular = new ClassAxB();

  ngOnInit():void{
    this.formulario = new FormGroup ({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
    });
  }
  calcularAxB():void{
    this.calcular.numero1 =this.formulario.value.numero1;
    this.calcular.numero2 = this.formulario.value.numero2;
    this.calcular.Operacion();
    this.resultado = this.calcular.resultado;
  }

}
