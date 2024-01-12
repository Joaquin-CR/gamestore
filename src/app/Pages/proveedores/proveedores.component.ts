import { Component } from '@angular/core';
import { ProveedoresService } from '../../Services/proveedores.service';
import { Proveedor } from '../../../interfaces/types';

@Component({
  selector: 'app-proveedores',
  standalone: false,
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {
  listaProveedores: Proveedor[] = [];

  constructor(private _proveedorService: ProveedoresService) { }

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
      complete: () => { },
    });
  }

  editarProveedor(cve: number) {
    console.log('Se editará el Proveedor con id:', cve);
  }
}
