import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact">
      <div className="h-min mb-10 w-screen ">
        <div className=" h-40 flex items-center justify-center">
          <div className="font-bold md:mt-12 items-center justify-center flex text-amber-500 text-3xl mb-8">
            Contact us
            <hr className="mt-9 absolute border-2 rounded-lg border-cyan-900 w-[155px] flex text-center" />
          </div>
        </div>

        <div className="flex flex-row">
          <div className=" md:grid grid-cols-5 gap-4 w-screen">
            <div className="hidden md:block col-span-2 overflow-hidden ">
              <Image
                src="/contactus.png"
                width={700}
                height={800}
                layout="intrinsic"
                className="object-contain"
              />
            </div>

            <div className=" md:col-span-3 rounded-xl  text-center text-xl">
              <div className="md:flex md:mx-20 mx-16 items-center  md:justify-between md:mt-20 ">
                <div className="w-60 h-48 mb-10 bg-amber-500 md:bg-amber-200 p-5 rounded-xl">
                  <HiLocationMarker
                    size={25}
                    className="w-full text-amber-600 text-center "
                  />
                  <div className="mt-3 text-xl font-bold w-full text-center">
                    Location
                  </div>
                  <div className="mt-2 w-full text-center  text-lg pl-4">
                    13A-KC Block, Ashok Vihar, Phase-1, Delhi-52
                  </div>
                </div>

                <div className="w-60 mb-10 h-48 bg-amber-500 md:bg-amber-200  p-5 rounded-xl ">
                  <BsFillTelephoneFill
                    size={25}
                    className="w-full text-amber-600 text-center "
                  />
                  <div className="mt-3 text-xl font-bold w-full text-center">
                    Phone Number
                  </div>
                  <div className="mt-2 w-full text-center  text-lg pl-4">
                    +91-9911548314
                  </div>
                </div>
              </div>

              <div className="">
                <h2>We love children, so feel free to visit during normal business hours.</h2>
                <h3 className="font-bold text-amber-500 mt-5 text-2xl uppercase">Timings</h3>
                <div className="mt-5 ">Monday to Friday</div>
                <div>4:00 p.m to 9:00 p.m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
