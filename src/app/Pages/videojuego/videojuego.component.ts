import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from '../../../interfaces/types';
import { VideojuegosService } from '../../Services/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  standalone: true,
  imports: [],
  templateUrl: './videojuego.component.html',
  styleUrl: './videojuego.component.css',
})
export class VideojuegoComponent {
  loading: boolean = false;
  videojuegoInfo: Videojuego | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _videojuegoService: VideojuegosService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.loadInfoVideojuego(id);
      },
      error: (error) => {
        console.log('Error:', error.status);
        this.loading = false;
      },
    });
  }

  loadInfoVideojuego(idVideojuego: number) {
    this._videojuegoService.getVideojuegoById(idVideojuego).subscribe({
      next: (videojuego) => {
        this.videojuegoInfo = JSON.parse(JSON.stringify(videojuego));
        console.log(this.videojuegoInfo);
      },
      error: (error) => {
        console.log('Error:', error.status);
      },
      complete: () => {},
    });
  }
}
