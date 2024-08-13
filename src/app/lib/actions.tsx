"use server";

import { boolean, z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const url_base:string = process.env.URL_API!;

const createProductSchema = z.object({
    nombre: z.string().min(3, {message: "nombre debe tener un minimo de 3 caracteres."}),
    descripcion: z.string({message: "Debe agragar una descripcion."}),
    categoriaId: z.string().uuid({message: "No se ingreso categoria."}),
    marcaId: z.string().uuid({message: "Debe seleccionar una marca."}),
    imagen: z.instanceof(File, {message: "Debe agregar una imagen."})
});


export type State = {
    errors?: {
      marcaId?: string[];
      categoriaId?: string[];
      nombre?: string[];
      descripcion?: string[];
      imagen?: string[];
    };
    message?: string | null;
};

export async function createProduct(formData: FormData){

    const validatedFields = createProductSchema.safeParse({
        nombre: formData.get('nombre'),
        descripcion: formData.get('descripcion'),
        categoriaId: formData.get('categoriaId'),
        marcaId: formData.get('marcaId'),
        imagen: formData.get('imagen')
    });
    if (!validatedFields.success) {
        console.log("fallo la creacion del nuevo producto!")
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Error al crear producto! Faltan campos en el formulario.',
        };
    }
    const {
        categoriaId,
        marcaId
    } = validatedFields.data;

    try {
        const response = await fetch(`${url_base}/newProduct`, { 
            method: 'POST', 
            body: formData,
        });
    } catch (error) {
        return{
            message: 'Error al crear nuevo producto! Fallo en la Base de datos.'
        };
    }
    revalidatePath(`/dashboard/${categoriaId}/${marcaId}`);
    redirect(`/dashboard/${categoriaId}/${marcaId}`);
}

export async function updateProduct(id: string, formData: FormData) {
    {/*
    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
      });
     
      const amountInCents = amount * 100;
    try { 
        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `;
    } catch (error) {
        return{
            message: 'Database Error: Failed to Update Invoice.'
        };
    }
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
    */}
  }

export async function deleteProduct(id:string) {
    try {
        const res = await fetch(`${url_base}/deleteProduct/${id}`,{
            method: 'DELETE'
        });
        if(!res.ok){
            console.log("Delete button fail!!!");
            return {message: "Error al eliminar producto! Falla en la base de datos."}
        }
        redirect('/');
    } catch (error) {
        return {message: "Error al eliminar producto."}
    }
}

export async function searchProduct(query:string){
    try {
        const response = await fetch(`${url_base}/searchProduct?name=${query}`);
        if(!response.ok){
            console.log("no se encontraron productos con esta busqueda!");
            return [];
        }else{
            const data = response.json();
            return data;
        } 
    } catch (error) {
        console.log("error al buscar productos: ", error);
        return {message: 'Error al buscar productos!'}
    }    
}