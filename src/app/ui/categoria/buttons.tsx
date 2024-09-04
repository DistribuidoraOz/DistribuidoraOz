import { TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { deleteCategory } from "@/app/lib/actions";
import Link from "next/link";

export function DeleteCategory({ id }: { id: string }) {
    
  const deleteCategoryWithId = ()=>{
    window.confirm('Seguro quiere eliminar Categoria?! Al eliminar una Categoria se eliminaran todas sus Marcas y productos! Desea continuar?') ?
    deleteCategory(id).then(()=>{
      alert('Se elimino con exito la Categoria!');
      window.location.reload();
    })
    .catch((err)=>{
      console.log("Error al eliminar Categoria: ", err);
      alert('Error al eliminar Categoria!');
    }) :
    alert('Se cancelo Eliminar!');
  }
  return (
    <form onSubmit={e =>{
      e.preventDefault();
      deleteCategoryWithId();
    }}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function LinkDeletCategory(){
  return(
    <Link
      href={`/admi/delete/categoria`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <TrashIcon className="w-5 text-fuchsia-700"/>
    </Link>
  )
}

export function AddCategory() {
  return (
    <Link
      href={`/admi/create/categoria`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PlusIcon className="w-5 text-fuchsia-700" />
    </Link>
  );
}