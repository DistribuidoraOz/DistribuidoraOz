import { ListBulletIcon } from "@heroicons/react/24/outline";
import { optionField } from "../lib/definitions";

export function ImputListName({ list, label, defValue }: 
  {list: optionField[], label:string, defValue?:string }){
    var error:[] = [];
    var valor = defValue || '';
    return (
      <div className="mb-4">
        <label htmlFor={label} className="mb-2 block text-sm font-medium">
          {`Seleccione una ${label}`}
        </label>
        <div className="relative">
          <select
            id={label}
            name={`${label}Id`}
            className="peer block bg-transparent w-full cursor-pointer rounded-md border border-blue-400 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue={defValue}
            aria-describedby={`${label}-error`}
          >
            <option value="" disabled>
              {`Seleccione una ${label}`}
            </option>
            {list.map((option) => (
              <option key={option.id} value={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
          <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        <div id={`${label}-error`} aria-live="polite" aria-atomic="true">
          {error?.map((error: any) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
    );
  };
