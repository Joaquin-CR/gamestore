import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../../interfaces/types';
import { ProveedoresService } from '../../Services/proveedores.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css',
})
export class ProveedorComponent {
  loading: boolean = false;
  proveedorInfo: Proveedor | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _proveedorService: ProveedoresService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.loadInfoProveedor(id);
      },
      error: (error) => {
        console.log('Error:', error.status);
        this.loading = false;
      },
    });
  }

  loadInfoProveedor(idProveedor: number) {
    this._proveedorService.getProveedoresById(idProveedor).subscribe({
      next: (proveedor) => {
        this.proveedorInfo = JSON.parse(JSON.stringify(proveedor));
        console.log(this.proveedorInfo);
      },
      error: (error) => {
        console.log('Error:', error.status);
      },
      complete: () => {},
    });
  }
}
