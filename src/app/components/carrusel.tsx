"use client";

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={700} height={300} src='https://res.cloudinary.com/dnnafr8ny/image/upload/v1720798270/baner20_tegzq5.jpg' alt='' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={700} height={300} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1720797495/baner5_dhjqsq.avif" alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={700} height={300} src="https://res.cloudinary.com/dnnafr8ny/image/upload/v1720797767/baner10_dncnql.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;