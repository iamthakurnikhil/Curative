"use client";

import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { card } from "@/constants";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);


  // Responsive configuration for the carousel
  const responsiveConfig = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
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
    <section id="services">
      <div className="lg:mx-40 md:mx-20 mx-4 h-screen ">
        <div className=" h-40 flex items-center justify-center">
          <div className="font-bold mt-12 items-center justify-center flex text-amber-500 text-3xl ">
            Services
            <hr className="mt-9 absolute border-2 rounded-lg border-cyan-900 w-[115px] flex text-center" />
          </div>
        </div>

        <Carousel
          responsive={responsiveConfig}
          ssr
          className=" py-10"
          beforeChange={(previousSlide, nextSlide) => setActiveSlide(nextSlide)}
          customTransition="transform 500ms ease-in-out"
        >
          {card.map((card) => (
            <div
              key={card.id}
              className="h-[26rem] md:h-96 w-72 mx-6 justify-center overflow-hidden space-x-2 rounded-xl bg-sky-50 overflow-y-auto overflow-x-hidden shadow-lg shadow-gray-600"
            >
              <h3 className="text-center text-2xl h-24 flex items-center justify-center text-white p-2 py-4 font-semibold rounded-t-xl bg-cyan-900 uppercase tracking-widest">
                {card.title}
              </h3>
              <div className="px-4 py-2 font-semibold">{card.article}</div>
              <div className="w-full flex items-center justify-center"></div>
            </div>
          ))}
        </Carousel>

        <style>{`
        .bg-sky-50::-webkit-scrollbar {
          width: 10px;
        }
        
        .bg-sky-50::-webkit-scrollbar-track {
          background-color: #f3f3f3;
        }
        
        .bg-sky-50::-webkit-scrollbar-thumb {
          background-color: #ffb700;
          border-radius: 4px;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Services;
