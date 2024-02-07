import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  vistaActual: string = 'videojuegos';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifica la URL actual después de cada navegación
        if (event.url != '/videojuegos') {
          if (event.url.includes('proveedores')) {
            this.vistaActual = 'proveedores';
          } else if (event.url.includes('/videojuegos/')) {
            this.vistaActual = 'videojuego';
          } else if (event.url.includes('/proveedores/')) {
            this.vistaActual = 'proveedor';
          } else if (event.url.includes('/editVideojuego/')) {
            this.vistaActual = 'edit videojuego';
          } else if (event.url.includes('/newVideojuego')) {
            this.vistaActual = 'new videojuego';
          }
        } else {
          this.vistaActual = 'videojuegos';
        }
      }
    });
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
