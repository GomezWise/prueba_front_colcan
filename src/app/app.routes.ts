import { Routes } from '@angular/router';

export const routes: Routes = [

      { path: '', loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard) 

    },
    { path: 'formulario/:id', loadComponent: () => import('./formulario/formulario').then(m => m.Formulario) 

    },
    { path: 'listado', loadComponent: () => import('./listado/listado').then(m => m.Listado) 

    }
    

];
