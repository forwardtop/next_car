import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
import { bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8, bus9, background } from "public/assets";

const Buses = [
  {
    id: 0,
    src: background,
    alt: "Bus",
    link: "/bus",
  },
  {
    id: 1,
    src: bus1,
    alt: "Bus 1",
    link: "/bus1",
  },
  {
    id: 2,
    src: bus2,
    alt: "Bus 2",
    link: "/bus2",
  },
  {
    id: 3,
    src: bus3,
    alt: "Bus 3",
    link: "/bus3",
  },
  {
    id: 4,
    src: bus4,
    alt: "Bus 4",
    link: "/bus4",
  },
  {
    id: 5,
    src: bus5,
    alt: "Bus 5",
    link: "/bus5",
  },
  {
    id: 6,
    src: bus6,
    alt: "Bus 6",
    link: "/bus6",
  },
  {
    id: 7,
    src: bus7,
    alt: "Bus 7",
    link: "/bus7",
  },
  {
    id: 8,
    src: bus8,
    alt: "Bus 8",
    link: "/bus8",
  },
  {
    id: 9,
    src: bus9,
    alt: "Bus 9",
    link: "/bus9",
  },
]
  


const BootstrapCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Buses.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={5000}>
          <img src={item.src.src} alt="slides" />
          {/* <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">View Details</button>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
     
  );
};

export default BootstrapCarousel;
