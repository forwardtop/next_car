// components/Gallery.tsx
import { front1, front2, front3, front4, front5, front6 } from "public/assets";

const ImageGallery: React.FC = () => {
    const images = [
      {
        src: front1,
        alt: "Image 1",
        link: "/link1",
      },
      {
        src: front2,
        alt: "Image 2",
        link: "/link2",
      },
      {
        src: front3,
        alt: "Image 3",
        link: "/link3",
      },
      {
        src: front4,
        alt: "Image 4",
        link: "/link4",
      },
      {
        src: front5,
        alt: "Image 5",
        link: "/link5",
      },
      {
        src: front6,
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
                    src={image.src.src}
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
                    src={image.src.src}
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
                    src={image.src.src}
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
  