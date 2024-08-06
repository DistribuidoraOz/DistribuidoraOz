
import { unstable_noStore as noStore } from 'next/cache';

const basicUrl: string = process.env.URL_API!;

export async function findAllcategory(){
    noStore();
    try {
        const response = await fetch(`${basicUrl}/categorys`);

        if(!response.ok){
            throw new Error('no se recuperaron datos')
        }
        const data = await response.json();
        //console.log("soy responce en fecht findAllCategory: ", data);

        return data; 
    } catch (error) {
        console.error('Ocurrio un error al recuperar los datos: ', error);
        return [];
    }   
}

export async function findCategoryById(id: string) {
    noStore();
    try {
       const response = await fetch(`${basicUrl}/categoryById/${id}`);
       if(!response.ok){
        return null;
       }
       const data = await response.json();
       return data;
    } catch (error) {
        console.log("No se pudo recuperar categoria por nombre! ", error);
        
    }   
}

export async function findAllMarcas() {
    noStore();
    try {
        const response = await fetch(`${basicUrl}/marcas`);
        if(!response.ok){
            console.log("No se recuperaron todas las marcas, response no ok!");
            return null;
        }
        const data = await response.json()
        console.log("Se recuperaron todas las marcas!!!!!");
        return data;

    } catch (error) {
        console.log("ERROR al recuperar todas las marcas!");  
        
    }
}

export async function findMarcasByCategoria(id: string){
    noStore();

    try {
        const response = await fetch(`${basicUrl}/marcasByCategoryId/${id}`);
        if(!response.ok){
            throw new Error('no se recuperaron datos')
        }
        const data = await response.json();
        //console.log("soy responce en fecht: ", data);

        return data; 
    } catch (error) {
        console.error('Ocurrio un error al recuperar los datos: ', error);
        return [];
    }   
}

export async function findProductByMarcaId(id: string){
    noStore();
    try {
        const response = await fetch(`${basicUrl}/productosByMarcaId/${id}`);
        if(!response.ok){
            console.log('no se recuperaron productos por marca');
            return null;
        }
        const data = await response.json();
        //console.log("soy responce en fecht: ", data);
        return data; 

    } catch (error) {
        console.error('Ocurrio un error al recuperar los productos x marca: ', error);
        return [];
    }   
}

export async function findProductByCategoryId(id: string){
    noStore();
    try {
        const response = await fetch(`${basicUrl}/productoByCategory/${id}`);
        if(!response.ok){
            console.log('no se recuperaron productos por categoria');
            return null;
        }
        const data = await response.json();
        //console.log("soy responce en fecht: ", data);
        return data; 

    } catch (error) {
        console.error('Ocurrio un error al recuperar los productos x categoria: ', error);
        return [];
    }   
}
