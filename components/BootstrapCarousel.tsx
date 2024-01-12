import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { items } from "../public/Items.json";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";

interface BootstrapItem {
  id: number;
  imageUrl: string;
  title: string;
  body: string;
}

const BootstrapCarousel: React.FC = () => {
  const { bootstrap } = items;
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item: BootstrapItem) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={3000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">View Details</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapCarousel;
