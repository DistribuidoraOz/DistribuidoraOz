export type optionField = {
    id: string;
    nombre: string;
  };


export type propsImput = {
  id: string,
  name: string,
  errors: []
}

export type dataForm = {
  categoriaId: string;
  marcaId: string;
  nombre: string;
  descripcion: string;
  imagen: File | null;
}

export type cardData ={
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export type peopleField = {
  imageUrl: string;
  role: string;
  name: string;
}