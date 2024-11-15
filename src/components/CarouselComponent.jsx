import { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
  {
    src: '/assets/fotos/foto1.webp',
    // altText: 'Maquinaria',
    caption: 'Maquinaria'
  },
  {
    src: '/assets/fotos/foto2.webp',
    // altText: 'Slide 2',
    caption: 'Telas'
  },
  {
    src: '/assets/fotos/foto3.jpg',
    // altText: 'Slide 3',
    caption: 'Insumos'
  }
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img src={item.src} alt={item.altText} className="carousel-image" />
      <CarouselCaption  captionHeader={item.caption} />
    </CarouselItem>
  ));

  return (
    <div className="carousel-container"> {/* Contenedor personalizado */}
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;



