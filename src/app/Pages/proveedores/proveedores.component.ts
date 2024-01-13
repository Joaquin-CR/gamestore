import { Component } from '@angular/core';
import { Proveedor } from '../../../interfaces/types';
import { ProveedoresService } from '../../Services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
})
export class ProveedoresComponent {
  listaProveedores: Proveedor[] = [];

  constructor(private _proveedorService: ProveedoresService) {}

  ngOnInit() {
    this._proveedorService.getAllProveedores().subscribe({
      next: (proveedores) => {
        JSON.parse(JSON.stringify(proveedores)).map((proveedor: Proveedor) => {
          this.listaProveedores.push(proveedor);
        });
      },
      error: (error) => {
        console.log('Error:', error.status);
      },
      complete: () => {},
    });
  }

  editarProveedor(cve: number) {
    console.log('Se editará el Proveedor con id:', cve);
  }
}
