"use client";

import Carousel from 'react-bootstrap/Carousel';

const alto:number = 200;
const ancho:number = 1100;

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870193/baner_REGIONALES._OOZ_dnemia.jpg' alt='Banner' />
        <Carousel.Caption>
          <p>Productos artesanales de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870194/baner_BAZAR_OOZ_ckfmto.jpg" alt='banner' />
        <Carousel.Caption>
          <p>Gran variedad en productos de Bazar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870452/baner_REGALERIA_OOZ_gxhtie.jpg" alt="banner" />
        <Carousel.Caption>
          <p>De todo para el regalo ideal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870193/baner_playa_OOZ_levagx.jpg' alt='banner' />
        <Carousel.Caption>
          <p>Productos para playa, tenemos lo que buscas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870194/baner_VARIOS_OOZ_renggi.jpg' alt='banner' />
        <Carousel.Caption>
          <p>Producto de todo tipo.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870193/baner_CAMPING_OOZ_t1jxh2.jpg' alt='banner' />
        <Carousel.Caption>
          <p>Praductos de camping para que tu dia sea inolvidable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1722870193/baner_libreria_OOZ_umezly.jpg' alt='banner' />
        <Carousel.Caption>
          <p>Articulos de libreria para el cole!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.05.20_PM_pdhh1a.jpg' alt='' />
        <Carousel.Caption>
          <p>Variedad en juguetes para divertirse y aprender.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;