import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from '../../../interfaces/types';
import { ModalComponent } from '../../Components/modals/editModal/editModal.component';
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
  showModal: boolean = false;
  editVideojuego: Videojuego | null = null;

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

  editarvideojuego(vid: Videojuego) {
    this.editVideojuego = vid;
    this.showModal = true;
  }

  eliminarVideojuego(vid: Videojuego) {
    console.log('Se eliminará el vid', vid);
  }

  setNullModalVid() {
    this.showModal = false;
    this.editVideojuego = null;
  }

  goToVidoejuego(id: number) {
    this.router.navigate([`videojuegos/${id}`]);
  }

  goToNewVideojuego() {
    this.router.navigate([`newVideojuego`]);
  }
}
