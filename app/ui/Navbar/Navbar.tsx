"use client";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

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

  //Navbar onscroll
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  //"max-w-7xl mx-auto mb-10"
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      // jika menu ditutup, maka overflow normal
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  return (
    <div className="w-full mx-auto md:mb-28 mb-[100px]">
      <div
        className={
          navbar
            ? "flex fixed top-0 bg-[#ffffffab] backdrop-blur-md md:border-b md:border-gray-300 transition duration-300 ease-in-out text-white md:mb-10 py-4 px-4 border-b border-gray-300 w-full 2xl:px-32"
            : "flex fixed top-0 transition duration-300 backdrop-blur-md ease-in-out md:mb-10 py-4 px-4 border-b border-gray-300 md:border-none w-full 2xl:px-32"
        }
      >
        <div className="flex items-center justify-between w-full mx-auto max-w-7xl md:container">
          <div className="flex">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-gray-800 sm:text-2xl"
            >
              <Image
                src="/img/logo.webp"
                alt="logo"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
              Monitoring Piutang
            </Link>
          </div>
          <div className="flex">
            <ul className="hidden text-lg font-bold text-gray-800 md:flex md:gap-6">
              <li>
                <Link className="hover:text-green-600" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-600" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-600" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-green-600" href="/">
                  Dashboard
                </Link>
              </li>
            </ul>
            <button
              aria-label="Hamburger Menu Icon"
              onClick={toggleMenu}
              className="text-gray-800"
            >
              {openMenu ? (
                <XMarkIcon className="w-6 h-6 cursor-pointer md:hidden" />
              ) : (
                <Bars3Icon className="w-6 h-6 cursor-pointer md:hidden" />
              )}
            </button>
          </div>
        </div>
      </div>
      <ul
        className={`md:hidden backdrop-blur-md m-[2px] fixed z-[2000] h-[100vh] shadow-lg p-4 pb-10 bg-[#ffffffab] left-0 w-full text-lg font-medium text-gray-800 ${
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
  );
};

export default Navbar;
