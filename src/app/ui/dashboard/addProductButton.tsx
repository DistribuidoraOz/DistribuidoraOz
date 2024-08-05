import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export function AddProduct({ id }: { id: string }) {
    return (
      <Link
        href={`/admi/create/${id}`}
        className="absolute bottom-2 right-2 rounded-md border p-2 hover:bg-gray-100"
      >
        <PlusIcon className="w-5" />
      </Link>
    );
}