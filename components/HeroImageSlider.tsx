import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const items = [
  {
    src: '/assets/car1.webp',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: '/assets/car2.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: '/assets/car3.webp',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
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
