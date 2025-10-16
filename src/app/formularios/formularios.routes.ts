import { Routes } from "@angular/router";
import { ZodiacoChinoComponent } from "./zodiaco-chino/zodiaco-chino.component";

export default [

  {
    path: 'Distancia',
    loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)
  },
  {
    path: 'AxB',
    loadComponent:()=>import('./ax-b/ax-b.component').then(c=>c.AxBComponent)
  },
  {
    path: 'Zodiaco',
    loadComponent:()=>import('./zodiaco-chino/zodiaco-chino.component').then(c=>c.ZodiacoChinoComponent)
  }

] as Routes
