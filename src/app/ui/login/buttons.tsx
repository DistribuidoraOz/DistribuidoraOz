import Link from "next/link";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";



export function UpdateInvoice({ id }: { id: string }) {
    return (
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
}
  
export function DeleteInvoice({ id }: { id: string }) {
    //const deleteInvoiceWithId = deleteInvoice.bind(null, id);
    return (
      <form action={'deleteInvoices...'}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}