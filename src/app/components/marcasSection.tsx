

const people = [
    {
      name: 'Rondi',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770226/Rondi_logo_j5kusv.jpg'
    },
    {
        name: 'Tramontina',
        imageUrl:
          'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769691/Tramontina._f8oibv.jpg'
    },
    {
        name: 'New Plast',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770223/New_Plast_logo_uunytr.jpg'
    },
    {
        name: 'Jugar',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770221/Jugar_logo_ptw2me.jpg'
    },
    {
        name: 'Biemme',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770216/Biemme_logo_fwneyc.jpg'
    },
    {
        name: 'Kukibet',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770182/Kukibet_logo_ebphsp.jpg'
    },
    {
        name: 'Caprichito',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721770217/Caprichito_logo_fvrbxp.jpg'
    },
    {
        name: 'Rigolleau',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769738/Rigolleau_logo_xcmqus.jpg'
    },
    {
        name: 'Jovyfel',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769738/Rigolleau_logo_xcmqus.jpg'
    },
    {
        name: 'Crom',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769634/Crom_logo_wpywra.jpg'
    },
    {
        name: 'Opening',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769661/Opening_logo_wvnxvh.jpg'
    },
    {
        name: 'Nuva',
        imageUrl:
          'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721957780/jajajja_kqpnpx.jpg'
    },
    {
        name: 'Atom',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769656/Atom_logo_tlwvfv.jpg'
    },
    {
        name: 'Club',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769656/Club_Import_logo_q9l5qn.jpg'
    },
    {
        name: 'Caresse',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769652/Caresse_logo_q7grwh.jpg'
    },
    {
        name: 'Carol',
        imageUrl:
            'https://res.cloudinary.com/dnnafr8ny/image/upload/v1721769651/Carol_logo_utnlbv.jpg'
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