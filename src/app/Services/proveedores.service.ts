import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  protected url: string = environment.urlServiceSGA + '/proveedores';

  constructor(private httpClient: HttpClient) { }

  getAllProveedores() {
    return this.httpClient.get(this.url);
  }

  getProveedoresById(id: number) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
}
