import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { front1, front2, front3, front4, front5, front6, red1 } from "public/assets";

const items = [
  {
    src: front1,
    altText: 'Car Front 1',
    caption: 'Car Front 1',
    header: 'Car Front 1'
  },
  {
    src: front2,
    altText: 'Car Front 2',
    caption: 'Car Front 2',
    header: 'Car Front 2'
  },
  {
    src: front3,
    altText: 'Car Front 3',
    caption: 'Car Front 3',
    header: 'Car Front 3'
  },
  {
    src: front4,
    altText: 'Car Front 4',
    caption: 'Car Front 4',
    header: 'Car Front 4'
  },
  {
    src: front5,
    altText: 'Car Front 5',
    caption: 'Car Front 5',
    header: 'Car Front 5'
  },
  {
    src: front6,
    altText: 'Car Front 6',
    caption: 'Car Front 6',
    header: 'Car Front 6'
  },
  {
    src: red1,
    altText: 'Car Red 1',
    caption: 'Car Red 1',
    header: 'Car Red 1'
  }
];

const HeroImageSlider: React.FC = () => (
  <Carousel
    showThumbs={true}
    showArrows={true}
    autoPlay={true}
    interval={3000}
    infiniteLoop={true}
    className='w-[1200px]'
  >
    {items.map((item, index) => (
      <div key={index}>
        <img src={item.src.src} alt={item.altText} />
      </div>
    ))}
  </Carousel>
);

export default HeroImageSlider;
