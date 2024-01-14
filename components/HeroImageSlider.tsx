import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const items = [
  {
    src: '/assets/car/1 front.png',
    altText: 'Car Front 1',
    caption: 'Car Front 1',
    header: 'Car Front 1'
  },
  {
    src: '/assets/car/2 front.png',
    altText: 'Car Front 2',
    caption: 'Car Front 2',
    header: 'Car Front 2'
  },
  {
    src: '/assets/car/3 front.png',
    altText: 'Car Front 3',
    caption: 'Car Front 3',
    header: 'Car Front 3'
  },
  {
    src: '/assets/car/4 front.png',
    altText: 'Car Front 4',
    caption: 'Car Front 4',
    header: 'Car Front 4'
  },
  {
    src: '/assets/car/5 front.png',
    altText: 'Car Front 5',
    caption: 'Car Front 5',
    header: 'Car Front 5'
  },
  {
    src: '/assets/car/6 front.png',
    altText: 'Car Front 6',
    caption: 'Car Front 6',
    header: 'Car Front 6'
  },
  {
    src: '/assets/car/red 1.png',
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
        <img src={item.src} alt={item.altText} />
      </div>
    ))}
  </Carousel>
);

export default HeroImageSlider;
