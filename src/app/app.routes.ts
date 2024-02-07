import { Routes } from '@angular/router';
import { NewEditProvComponent } from './Pages/new-edit-prov/new-edit-prov.component';
import { NewEditVidComponent } from './Pages/new-edit-vid/new-edit-vid.component';
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
  {
    path: 'newVideojuego',
    component: NewEditVidComponent,
    title: 'Nuevo Videojuego',
  },
  {
    path: 'editVideojuego/:id',
    component: NewEditVidComponent,
    title: 'Editr Videojuego',
  },
  {
    path: 'newProveedor',
    component: NewEditProvComponent,
    title: 'Nuevo Proveedor',
  },
  {
    path: 'editProveedor/:id',
    component: NewEditProvComponent,
    title: 'Editr Proveedor',
  },
  { path: '**', redirectTo: 'videojuegos', pathMatch: 'full' },
];
