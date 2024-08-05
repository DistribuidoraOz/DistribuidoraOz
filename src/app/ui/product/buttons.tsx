import Link from "next/link";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { deleteProduct } from "@/app/lib/actions";



export function Update({ id }: { id: string }) {
    return (
      <Link
        href={``}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
}
  
export function Delete({ id }: { id: string }) {
    const deleteProductWithId = deleteProduct.bind(null, id);
    return (
      <form action={deleteProductWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}