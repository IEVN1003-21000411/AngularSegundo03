import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { ZodiacoChinoComponent } from './formularios/zodiaco-chino/zodiaco-chino.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DistanciaComponent, ZodiacoChinoComponent, AxBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
}
