

interface marca {
    name: string;
    imageUrl: string;
}

const marcas:marca[] = [
    {
      name:'duravit',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723040372/Duravit_Logo_wd1a5h.png'
    },
    {
      name:'yuyu',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723040516/Yuyu_logo_NUEVO_mrbkqw.png'
    },
    {
      name: 'Rondi',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039708/Rondi_logo_NUEVO_lcfsnb.png'
    },
    {
        name: 'Tramontina',
        imageUrl:
          'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039708/tramontina_logo_NUEVO_vrys1x.png'
    },
    {
        name: 'New Plast',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039713/New_Plast_logo_NUEVO_zvcflc.png'
    },
    {
        name: 'Jugar',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039707/Jugar_logo_NUEVO_qriudk.png'
    },
    {
        name: 'Biemme',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039713/Biemme_logo_NUEVO_g9kosu.png'
    },
    {
        name: 'Kukibet',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039712/Kukibet_logo_NUEVO_hupwtx.png'
    },
    {
        name: 'Caprichito',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039715/Caprichito_logo_NUEVO_faos6b.png'
    },
    {
        name: 'Rigolleau',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1722989378/Rigolleau_logo_NEW_d5yn9g.png'
    },
    {
        name: 'Jovyfel',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039708/Jovife_logo_NUEVO_vf2ppj.png'
    },
    {
        name: 'Crom',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723040287/Crom_logo_NUEVO_qcb5m4.png'
    },
    {
        name: 'Opening',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039903/Opening_logo_NUEVO_khnztc.png'
    },
    {
        name: 'Nuva',
        imageUrl:
          'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039713/Nuva_logo_NUEVO_dvasg4.png'
    },
    {
        name: 'Atom',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039708/Atom_logo_NUEVO_olmb91.png'
    },
    {
        name: 'Club',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039712/Club_Import_logo_NUEVO_nbvim7.png'
    },
    {
        name: 'Caresse',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039708/Caresse_logo_NUEVO_b7u4id.png'
    },
    {
        name: 'Carol',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723039385/Carol_logo_NUEVO_zpte7a.png'
    },
    // More people...
  ]


export default function SeccionMarcas() {
    return (
      <div className="bg-none py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-0 lg:px-6">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Contamos con gran variedad de productos.
            Trabajamos con las siguientes marcas:
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {marcas.map((item)=>(
              <img
                alt="Statamic"
                src={item.imageUrl}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  