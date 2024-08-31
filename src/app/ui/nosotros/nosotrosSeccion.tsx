const people = [
    {
      name: 'Aseroramiento',
      role: 'Nuestro equipo de asesores esta para resolver cualquier duda y brindar soluciones que se ajusten a tus necesidades.',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1724881193/istockphoto-1359876068-612x612_oyxigm.jpg',
    },
    {
      name: 'Envios reaponsables',
      role: 'Nos comprometemos a que nuestros envios sean seguros, rapidos y oportunos para tu tranquilidad.',
      imageUrl:
        'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723577927/istockphoto-1411757433-612x612_mfl6ji.jpg'
    },
    {
      name: 'Distribuciòn',
      role: 'Contamos con distintos tipos de transporte para llegar a tiempo a todos lados.',
      imageUrl:'https://res.cloudinary.com/dnnafr8ny/image/upload/v1723577927/envio-encomienda_xyalmq.jpg'
    },
    {
      name: 'Embalaje',
      role: 'Nuestros años de experiencia te aseguran el mejor embalaje para que cada producto te Llegue en optimas condiciones.',
      imageUrl:'https://res.cloudinary.com/dnnafr8ny/image/upload/v1724880815/empaque-e1500310366187-768x509_jh9pzr.jpg'
    },
    // More people...
  ]
  
  export default function SectionShipping() {
    return (
      <div className="bg-white mb-8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-8 px-4 lg:px-6 xl:grid-cols-2">
          <ul role="list" className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-4">
                  <img alt="" src={person.imageUrl} className="h-44 w-44 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  