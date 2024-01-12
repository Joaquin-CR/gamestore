import { Routes } from '@angular/router';
import { ProveedorComponent } from './Pages/proveedor/proveedor.component';
import { ProveedoresComponent } from './Pages/proveedores/proveedores.component';
import { VideojuegoComponent } from './Pages/videojuego/videojuego.component';
import { VideojuegosComponent } from './Pages/videojuegos/videojuegos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'videojuegos', pathMatch: 'full' },
  {
    path: 'videojuegos',
    component: VideojuegosComponent,
    title: 'Lista Videojuegos',
  },
  {
    path: 'videojuegos/:id',
    component: VideojuegoComponent,
    title: 'Detalle del Videojuego',
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent,
    title: 'Lista Proveedores',
  },
  {
    path: 'proveedores/:id',
    component: ProveedorComponent,
    title: 'Detalle del Proveedor',
  },
];
