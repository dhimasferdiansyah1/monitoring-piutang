"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setOpenMenu(false);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setOpenMenu(false);
      });
    };
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      // jika menu ditutup, maka overflow normal
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div className="max-w-7xl mx-auto mb-10">
      <div className="md:container mx-auto">
        <div className="flex py-4 bg-white justify-between items-center px-4 border-b border-gray-300 md:border-none">
          <div className="">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Monitoring Piutang
            </Link>
          </div>
          <div className="flex">
            <ul className="text-lg font-bold text-gray-800 hidden md:flex md:gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Dashboard</Link>
              </li>
            </ul>
            <button aria-label="Hamburger Menu Icon" onClick={toggleMenu}>
              {openMenu ? (
                <XMarkIcon className="w-6 h-6 md:hidden cursor-pointer" />
              ) : (
                <Bars3Icon className="w-6 h-6 md:hidden cursor-pointer" />
              )}
            </button>
          </div>
        </div>
        <ul
          className={`md:hidden absolute z-[2000] h-[100vh] shadow-lg p-4 pb-10 bg-white left-0 w-full text-lg font-medium text-gray-800 ${
            openMenu ? "overflow-hidden" : "hidden"
          }`}
        >
          <li className="pt-4">
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="pt-4">
            <Link href="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
          <li className="pt-4">
            <Link href="/about" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className="pt-4">
            <Link href="/" onClick={handleLinkClick}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
