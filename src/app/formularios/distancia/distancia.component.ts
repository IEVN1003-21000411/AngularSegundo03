  import { Component } from '@angular/core';
  import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { Distancia } from './distancia';
  @Component({
    selector: 'app-distancia',
    imports: [FormsModule, ReactiveFormsModule],//Importar dependencias
    templateUrl: './distancia.component.html',
    styleUrl: './distancia.component.css'
  })
  export class DistanciaComponent {
    resultado!:number;
    distancia!: FormGroup;
    dist = new Distancia();

    ngOnInit():void{
      this.distancia = new FormGroup({
        x1: new FormControl(''),
        y1: new FormControl(''),
        x2: new FormControl(''),
        y2: new FormControl(''),
      });
    }
    calcularDistancia():void{//traermos los valores del formulario y los convertimos a numero para posteriormente pasarselos al constructor de la clase Distancia
      this.dist.x1 = this.distancia.value.x1;
      this.dist.y1 = this.distancia.value.y1;
      this.dist.x2 = this.distancia.value.x2;
      this.dist.y2 = this.distancia.value.y2;

      this.dist.calDistancia();
      this.resultado = this.dist.diatancia

    }
  }
