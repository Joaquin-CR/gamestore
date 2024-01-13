import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideojuegosService {
  protected url: string = environment.urlService + '/videojuegos';

  constructor(private httpClient: HttpClient) {}

  getAllVideojuegos() {
    return this.httpClient.get(this.url);
  }

  getVideojuegoById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  deleteVideojuego(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
