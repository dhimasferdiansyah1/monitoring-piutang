"use client";
import { useState } from "react";
import { Transition } from "react-transition-group";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="md:container mx-auto">
        <div className="flex py-4 bg-white justify-between items-center px-4 border-b border-gray-300 md:border-none">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-800">
              Monitoring Piutang
            </h1>
          </div>
          <div className="flex">
            <ul className="text-lg font-bold text-gray-800 hidden md:flex md:gap-6">
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
            </ul>
            <button onClick={toggleMenu}>
              {openMenu ? (
                <XMarkIcon className="w-6 h-6 md:hidden cursor-pointer" />
              ) : (
                <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`md:hidden block z-[2000] h-[100vh] shadow-lg p-4 pb-10 bg-white left-0 w-full text-lg font-medium text-gray-800 ${
            openMenu ? "absolute" : "hidden"
          }`}
        >
          <li className="pt-4">
            <a href="">Contact</a>
          </li>
          <li className="pt-4">
            <a href="">About</a>
          </li>
          <li className="pt-4">
            <a href="">Dashboard</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
