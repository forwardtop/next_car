// components/Gallery.tsx
const ImageGallery: React.FC = () => {
    const images = [
      {
        src: "/assets/car/1 front.png",
        alt: "Image 1",
        link: "/link1",
      },
      {
        src: "/assets/car/2 front.png",
        alt: "Image 2",
        link: "/link2",
      },
      {
        src: "/assets/car/3 front.png",
        alt: "Image 3",
        link: "/link3",
      },
      {
        src: "/assets/car/4 front.png",
        alt: "Image 4",
        link: "/link4",
      },
      {
        src: "/assets/car/5 front.png",
        alt: "Image 5",
        link: "/link5",
      },
      {
        src: "/assets/car/6 front.png",
        alt: "Image 6",
        link: "/link6",
      },
    ];
  
    return (
      <div className="mx-auto">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex flex-col w-full lg:w-2/3">
            {images.slice(0, 2).map((image, index) => (
              <div key={index} className={`w-${index === 0 ? 'full' : '1/2'} p-1 md:p-2`}>
                <a href={image.link}>
                  <img
                    alt={image.alt}
                    className="block rounded-lg object-cover object-center"
                    src={image.src}
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex w-full lg:w-1/3 flex-wrap">
            {images.slice(3, 4).map((image, index) => (
              <div key={index} className="w-full p-1 md:p-2">
                <a href={image.link}>
                  <img
                    alt={image.alt}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={image.src}
                  />
                </a>
              </div>
            ))}
            {images.slice(4).map((image, index) => (
              <div key={index} className={`w-${index === 3 ? 'full' : '1/2'} p-1 md:p-2`}>
                <a href={image.link}>
                  <img
                    alt={image.alt}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={image.src}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  