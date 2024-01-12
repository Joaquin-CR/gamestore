export type Videojuego = {
  cve_vid: number;
  tit_vid: string;
  pre_vid: number;
  proveedor: Proveedor;
  inv_vid: number;
};

export type Proveedor = {
  cve_prov: number;
  nom_prov: string;
  email_prov: string;
  tel_prov: string;
};
