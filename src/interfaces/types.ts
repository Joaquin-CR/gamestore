export interface Videojuego {
  cve_vid: number;
  tit_vid: string;
  pre_vid: number;
  proveedorId: number;
  nombreProveedor: string;
  inv_vid: number;
}

export interface Proveedor {
  cve_prov: number;
  nom_prov: string;
  email_prov: string;
  tel_prov: string;
  videojuegos: Videojuego[];
}
