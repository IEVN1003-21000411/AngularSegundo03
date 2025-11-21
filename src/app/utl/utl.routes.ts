import { Routes } from "@angular/router";

export default [

  {
    path: 'Agregar',
    loadComponent:()=>import('./agregar/agregar.component').then(c=>c.AgregarComponent)
  },
  {
    path: 'Alumnos',
    loadComponent:()=>import('./alumnos/alumnos.component').then(c=>c.AlumnosComponent)
  },
  {
    path: 'Editar/:matricula',
    loadComponent:()=>import('./editar/editar.component').then(c=>c.EditarComponent)
  },
    {
    path: 'Eliminar/:matricula',
    loadComponent:()=>import('./eliminar/eliminar.component').then(c=>c.EliminarComponent)
  },

] as Routes
