import {
    BookOpenIcon,
    SunIcon,
    ShoppingBagIcon,
    FireIcon,
    RocketLaunchIcon,
    GiftIcon,
    BuildingStorefrontIcon,
    SquaresPlusIcon,
  } from '@heroicons/react/24/outline';
import { optionField } from './definitions';

//funcion que mapea array category y agrega iconos + href
export function listMap(list: optionField[]){
    var newList = list.map((item)=>{
        let href = `/dashboard/${item.id}`;
        let icon;
        switch (item.nombre) {
          case 'Bazar':
            icon = ShoppingBagIcon;
            break;
          case 'Playa':
            icon = SunIcon;
            break;
    
          case 'Regaleria':
            icon = GiftIcon;
            break;
    
          case 'Libreria':
            icon = BookOpenIcon;
            break;
    
          case 'Camping':
            icon = FireIcon;
            break;
    
          case 'Jugueteria':
            icon = RocketLaunchIcon;
            break;
    
          case 'Regional':
            icon = BuildingStorefrontIcon;
            break;
    
          case 'Varios':
            icon = SquaresPlusIcon;
            break;
    
          default:
            icon = SquaresPlusIcon;
            break;
        }
        return {...item, href, icon}
      }); 
    return newList;   
}