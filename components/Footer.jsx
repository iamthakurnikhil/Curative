import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full text-white text-center h-24 text-xl bg-gray-900">
      Developed by <span className=" text-amber-500">Nikhil Thakur</span>
      <div className="flex  space-x-5 mt-3  justify-center">
        <Link href='https://github.com/iamthakurnikhil' target="_blank">
          
          <BsGithub size={25} />
        </Link>
        <Link href='https://instagram.com/iamthakurnikhil' target="_blank">
          <BsInstagram size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
