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
    src: 'https://www.vedantu.com/seo/content-images/b5ad473b-fa63-4a2a-b5ec-92b523446bc5_Vedantu_Kids_Stories.webp',
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: 'https://cdn.storybooks.app/storytelling.webp',
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: 'https://m.media-amazon.com/images/I/61xnC6mCgsL._AC_UF1000,1000_QL80_.jpg',
    altText: '',
    caption: '',
    key: 3,
  },
   {
    src: 'https://www.euroschoolindia.com/wp-content/uploads/2023/10/short-story-that-have-moral-lesson-jpg.webp',
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: 'https://cdn.storybooks.app/bedtime_stories.webp',
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
        <img src={item.src} alt={item.altText} className="story_slider"/>
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