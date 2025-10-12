import { Component } from '@angular/core';
import { ZodicoChino } from './zodico-chino';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco-chino',
  imports: [ReactiveFormsModule],//Importar dependencias
  templateUrl: './zodiaco-chino.component.html',
  styleUrl: './zodiaco-chino.component.css'
})
export class ZodiacoChinoComponent {
  zodiacoForm!: FormGroup;
  consultador = new ZodicoChino();
  resultados!: any;

  ngOnInit():void{
    this.zodiacoForm = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl(null),
      mes: new FormControl(null),
      ano: new FormControl(null),
      sexo: new FormControl('')
    })
  }
  ConsultarZodiaco(): void{
    if(this.zodiacoForm.valid){//validamos que el formulario que ingrese el usuario sea valido
      this.consultador.Nombre = this.zodiacoForm.value.nombre;
      this.consultador.Apaterno = this.zodiacoForm.value.apaterno;
      this.consultador.Amaterno = this.zodiacoForm.value.amaterno;
      this.consultador.Dia = this.zodiacoForm.value.dia;
      this.consultador.Mes = this.zodiacoForm.value.mes;
      this.consultador.ano = this.zodiacoForm.value.ano;
      this.consultador.Sexo = this.zodiacoForm.value.sexo;
      this.consultador.consultar();
      this.resultados = this.consultador.Resultado;
    }
  }
}
