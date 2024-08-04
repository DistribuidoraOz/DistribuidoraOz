"use client";

import Carousel from 'react-bootstrap/Carousel';

const alto:number = 200;
const ancho:number = 1100;

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747308/WhatsApp_Image_2024-07-23_at_11.58.56_AM_wxoeaf.jpg' alt='' />
        <Carousel.Caption>
          <p>Productos artesanales de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.00.04_PM_in3gxo.jpg" alt='' />
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_11.59.30_AM_itv1bk.jpg" alt="Third slide" />
        <Carousel.Caption>
          <p>Praesent commodo cursus magn.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.04.06_PM_dyh00m.jpg' alt='' />
        <Carousel.Caption>
          <p>Productos playa de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.01.52_PM_rk1h7u.jpg' alt='' />
        <Carousel.Caption>
          <p>Productos varios de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.01.16_PM_fusxen.jpg' alt='' />
        <Carousel.Caption>
          <p>Productos camping de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.00.36_PM_cdnmyj.jpg' alt='' />
        <Carousel.Caption>
          <p>Productos de libreria de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={ancho} height={alto} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1721747303/WhatsApp_Image_2024-07-23_at_12.05.20_PM_pdhh1a.jpg' alt='' />
        <Carousel.Caption>
          <p>Juguetes de primera calidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;