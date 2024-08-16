import { ParsedUrlQuery } from "querystring";

export type optionField = {
    id: string;
    nombre: string;
    categoriaId?: string;
};


export type dataForm = {
  categoriaId: string;
  marcaId: string;
  nombre: string;
  descripcion: string;
  imagen: File | null;
};

export type editDataForm = {
  id:string;
  CategoriaId: string;
  MarcaId: string;
  nombre: string;
  descripcion: string;
  imagen?: File | null;
  imgUrl?:string;
};

export type fetchProduct = {
  id:string;
  CategoriaId: string;
  MarcaId: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export type cardData = {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
};



