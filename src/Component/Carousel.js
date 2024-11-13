import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://www.crossword.in/cdn/shop/files/Fiction_Addiction_Banner_Desktop_copy_1728x@2x.jpg?v=1716985828',
    altText: '',
    caption: '',
    key: 1,
  },
  
  {
    src: 'https://www.bookswagon.com/bannerimages/84_inr.jpg?v=5.3',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'https://www.crossword.in/cdn/shop/files/Harry_Potter_Collection_Banner-Desktop_with_sticker-02_1728x@2x.jpg?v=1721285333',
    altText: '',
    caption: '',
    key: 3,
  },
  {
    src: 'https://thecomicbookstore.in/storage/2024/03/Marvel-comics.jpg',
    className:"comic",
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: 'https://www.bookswagon.com/bannerimages/79_inr.jpg?v=5.3',
    altText: '',
    caption: '',
    key: 5,
  },
  {
    src: 'https://thecomicbookstore.in/storage/2024/03/DC-comics.jpg',
    altText: '',
    caption: '',
    key: 6,
  },
  {
    src: 'https://www.crossword.in/cdn/shop/files/Preorder_banner_july_1728x@2x.jpg?v=1720598258',
    altText: '',
    caption: '',
    key: 7,
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
        <img src={item.src} className='imgs' alt={item.altText} />
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