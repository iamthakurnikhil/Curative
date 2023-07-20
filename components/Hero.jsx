"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <div className="w-screen h-screen flex flex-col relative md:grid grid-cols-2 ">
        <div className="lg:ml-48  ml-10 mt-28 md:mt-48">
          <div className="md:text-7xl text-5xl -px-10 font-bold">Curative </div>
          <h1 className="md:text-5xl text-3xl text-cyan-900 font-bold w-max mt-2 md:block ">
            Therapy Center
          </h1>
          <span className="absolute text-5xl md:text-8xl md:h-60 md:mx-[18rem] mx-44 -mt-[4.5rem] md:-mt-[7.5rem] text-rose-500 font-bold">
            +
          </span>
          <hr className="my-4 w-56 md:w-96 border-2 border-cyan-900" />

          <div className="mt-4 text-xl font-medium mr-20">
            Child's Skill Enhancement Clinic & Early Intervention Center
          </div>

          <button onClick={() => handleNavClick('contact')} className="mt-8 border text-xl px-4 py-2 font-bold bg-amber-500 rounded-full ">
            Contact us
          </button>
        </div>
        <div className="relative  flex-grow max-h-screen">
          <div className="hidden md:flex-grow md:flex justify-end">
            <Image
              src="/home-banner-background.png"
              width={500}
              height={100}
              layout="intrinsic"
              className="object-contain"
            />
          </div>
          <div className="relative h-80 mx-2 mt-4 md:mx-10 md:-mt-[22rem] lg:-mt-[30rem] lg:w-[30rem] lg:h-[32rem] md:w-[22rem]  md:h-[22rem]">
            <Image
              src="/Healthcare.png"
              alt="Healthcare"
              layout="fill"
              objectFit="contain"
              className="z-99"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
