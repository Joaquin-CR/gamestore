import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor, Videojuego } from '../../../../interfaces/types';

@Component({
  selector: 'app-editmodal',
  standalone: true,
  imports: [],
  templateUrl: './editModal.component.html',
  styleUrl: './editModal.component.css',
})
export class ModalComponent {
  @Input() videojuegoInfo: Videojuego | null = null;
  @Input() proveedorInfo: Proveedor | null = null;
  @Output() setNullEditVid = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {}

  onClickCancel() {
    this.setNullEditVid.emit();
  }

  onClickEdit(cve: number) {
    if (this.videojuegoInfo != null) {
      this.router.navigate([`editVideojuego/${cve}`]);
    }
  }
}
