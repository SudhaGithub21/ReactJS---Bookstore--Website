import React, { useState } from 'react';
/*import B6 from "../images/New_Arrivals/Witch.png";*/
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://m.media-amazon.com/images/I/91uDfBjwfFL.jpg',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'https://s26162.pcdn.co/wp-content/uploads/2021/08/marvel1.jpeg',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'https://www.comicbookherald.com/wp-content/uploads/2019/03/deepdish-marvel-1024x780.jpg',
    altText: '',
    caption: '',
    key: 3,
  },
   {
    src: 'https://www.denofgeek.com/wp-content/uploads/2020/04/marvel-comics-unlimited-recommendations.jpg?fit=1200%2C675',
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: 'https://static.vecteezy.com/system/resources/previews/030/648/011/non_2x/a-comic-book-cover-for-the-marvel-universe-free-photo.jpg',
    altText: '',
    caption: '',
    key: 5,
  },
];

function Example(args) {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="marvel"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Example;