// je defini un type pour les objet currency
// je l'exporte, tous les fichiers qui en ont besoin, l'importeront pour l'utiliser pour typer des variables
export interface ICurrency {
  description: string;
  code: string;
  rate: number;
}
