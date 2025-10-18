import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoChinoComponent } from './formularios/zodiaco-chino/zodiaco-chino.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';
import { NavbarComponent } from './navbar/navbar.component'

import { initFlowbite } from 'flowbite';
import { TempComponent } from "./tem/temp/temp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    DistanciaComponent,
    ZodiacoChinoComponent,
    AxBComponent,
    NavbarComponent, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';

  ngOnInit():void{
    initFlowbite();
  }
}
