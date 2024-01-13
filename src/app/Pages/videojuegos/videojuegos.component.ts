import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Videojuego } from '../../../interfaces/types';
import { VideojuegosService } from '../../Services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css',
})
export class VideojuegosComponent {
  listaVideojuegos: Videojuego[] = [];

  constructor(private _videojuegoService: VideojuegosService) {}

  ngOnInit() {
    this._videojuegoService.getAllVideojuegos().subscribe({
      next: (videojuegos) => {
        JSON.parse(JSON.stringify(videojuegos)).map(
          (videojuego: Videojuego) => {
            this.listaVideojuegos.push(videojuego);
          }
        );
      },
      error: (error) => {
        console.log('Error:', error.status);
      },
      complete: () => {},
    });
  }

  editarvideojuego(cve: number) {
    console.log('Se editará el videojuego con id:', cve);
  }
}
