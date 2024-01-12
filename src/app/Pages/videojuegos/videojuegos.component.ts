import { Component } from '@angular/core';
import { VideojuegosService } from '../../Services/videojuegos.service';
import { Videojuego } from '../../../interfaces/types';

@Component({
  selector: 'app-videojuegos',
  standalone: false,
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css'
})
export class VideojuegosComponent {

  listaVideojuegos: Videojuego[] = [];

  constructor(private _videojuegoService: VideojuegosService) { }

  ngOnInit() {
    this._videojuegoService.getAllVideojuegos().subscribe({
      next: (videojuegos) => {
        JSON.parse(JSON.stringify(videojuegos)).map((videojuego: Videojuego) => {
          this.listaVideojuegos.push(videojuego);
        });
      },
      error: (error) => {
        console.log('Error:', error.status);
      },
      complete: () => { },
    });
  }

  editarvideojuego(cve: number) {
    console.log('Se editará el videojuego con id:', cve);
  }

}
