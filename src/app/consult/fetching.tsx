
import { unstable_noStore as noStore } from 'next/cache';

const basicUrl: string = 'http://localhost:4000/';

export async function findAllcategory(){
    noStore();
    try {
        const response = await fetch(`http://localhost:4000/categorias`);
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

export async function findAllmarcas(){
    noStore();
    try {
        const response = await fetch(`http://localhost:4000/marcas`);
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

export async function findAllproduct(){
    noStore();
    try {
        const response = await fetch(`http://localhost:4000/productos`);
        if(!response.ok){
            throw new Error('no se recuperaron datos')
        }
        const data = await response.json();
        console.log("soy responce en fecht: ", data);

        return data; 
    } catch (error) {
        console.error('Ocurrio un error al recuperar los datos: ', error);
        return [];
    }   
}
