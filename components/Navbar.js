"use client";

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { navbar } from "@/constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMenu(false);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-50 shadow-xl z-10">
      <nav className="max-w-[1440px] mx-10 lg:mx-48 mt-4 flex justify-between items-center bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <div className="text-3xl text-amber-500 font-bold">CURATIVE</div>
        </Link>
        <div>
          <ul className="md:flex hidden text-lg space-x-12 font-bold">
            {navbar.map((item, index) => (
              <div className="hover:text-cyan-800 cursor-pointer" key={index}>
                <li
                  onClick={() => handleNavClick(item.id)}
                  className={activeNav === item.id ? "border-b-4 border-amber-500" : ""}
                >
                  {item.title}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="block md:hidden" onClick={() => setMenu(!menu)}>
          {menu ? <AiFillCloseCircle size={30} /> : <MdMenu size={30} />}
        </div>

        {menu && (
          <ul className="right-7 space-y-2 text-xl rounded-lg absolute bg-amber-500 p-2 top-14 ease-in-out duration-500">
            {navbar.map((item, index) => (
              <li
                className="p-3 hover:scale-110 smooth duration-150 cursor-pointer"
                key={index}
                onClick={() => handleNavClick(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
