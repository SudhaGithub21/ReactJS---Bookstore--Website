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
    src: 'https://i.etsystatic.com/42718313/r/il/1bd840/5511167835/il_fullxfull.5511167835_pb41.jpg',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'https://miro.medium.com/v2/resize:fit:1200/1*iReJleUEZCcL0BKqofM2iQ.jpeg',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'https://alibrarymama.com/wp-content/uploads/2021/09/ppt_shortfantasy-1.jpg',
    altText: '',
    caption: '',
    key: 3,
  },
   {
    src: 'https://cdn.mos.cms.futurecdn.net/ooP9M8oGrxbAXrQXigEbM9.jpg',
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: 'https://images.contentstack.io/v3/assets/blt64b2de096a6f4663/blt25c40f15f3c62424/6490a3e6ee6549e401cce7c6/best_fantasy.png',
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
        <img src={item.src} alt={item.altText} className="fantasy_slider"/>
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