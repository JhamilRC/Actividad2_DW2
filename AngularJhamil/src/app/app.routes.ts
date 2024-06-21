import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

export const routes: Routes = [
    { path: 'AcercaDe', component: AcercaDeComponent },
    { path: 'Inicio', component: InicioComponent },
    { path: '**', component: HomeComponent },
];
