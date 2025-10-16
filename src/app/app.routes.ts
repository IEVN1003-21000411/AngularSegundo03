import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=>
      import('./auth/features/auth.routes').then((a) => a.default),
  },
  {
    path: 'utl',
    loadChildren:()=>
      import('./utl/utl.routes').then((u) => u.default),
  },
  {
    path: 'formulario',
    loadChildren:()=>
      import('./formularios/formularios.routes').then((f) => f.default),
  },

];
