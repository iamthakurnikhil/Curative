"use client"

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { card } from '@/constants';
 // Create a separate CSS file to import Tailwind CSS classes

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);


  // Number of cards to display at once
  const cardsToShow = 3;

  // Number of cards to slide on each click
  const cardsToSlide = 1;

  // Responsive configuration for the carousel
  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: cardsToShow,
      slidesToSlide: cardsToSlide,
    },
    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mx-40 mb-10">
              <div className="font-bold items-center justify-center flex text-amber-500 text-3xl mb-8">
        Services
        <hr className="mt-7 border-2 rounded-lg border-cyan-900 w-[115px] flex text-center" />
      </div>
      <Carousel
        responsive={responsiveConfig}
        ssr

        beforeChange={(previousSlide, nextSlide) => setActiveSlide(nextSlide)}
        customTransition="transform 500ms ease-in-out"
      >
        {card.map((card) => (
          <div key={card.id} className="h-96 w-72 mt-16 mx-6 justify-center overflow-hidden space-x-2 rounded-xl bg-sky-50 overflow-y-auto overflow-x-hidden shadow-lg shadow-gray-600">
            <h3 className="text-center text-2xl h-24 flex items-center justify-center text-white p-2 py-4 font-semibold rounded-t-xl bg-cyan-900 uppercase tracking-widest">{card.title}</h3>
            <div className="px-4 py-2 font-semibold">{card.article}</div>
            <div className="w-full flex items-center justify-center"></div>
          </div>
        ))}
      </Carousel>

    </div>
  );
};

export default Slider;
