

const people = [
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
export default function SectionMarcas(){
    return (
      <div className="bg-none py-24 sm:py-32">
        <div className="max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trabajamos con las siguientes marcas:</h2>    
        </div>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-end gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-25 w-40 rounded-md" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
} 