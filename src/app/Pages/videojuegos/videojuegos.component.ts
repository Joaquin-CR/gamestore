import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from '../../../interfaces/types';
import { ModalComponent } from '../../Components/modal/modal.component';
import { VideojuegosService } from '../../Services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  standalone: true,
  templateUrl: './videojuegos.component.html',
  styleUrl: './videojuegos.component.css',
  imports: [CommonModule, ModalComponent],
})
export class VideojuegosComponent {
  listaVideojuegos: Videojuego[] = [];

  constructor(
    private _videojuegoService: VideojuegosService,
    private router: Router
  ) {}

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

  goToVidoejuego(id: number) {
    this.router.navigate([`videojuegos/${id}`]);
  }
}
