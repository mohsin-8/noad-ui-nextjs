import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// import logo image
import Logo from "/public/images/logo.png";

// import navbar data type
import { NavbarDataItem } from "@/data/data";

interface NavbarItemsProps {
  navData: NavbarDataItem;
}

const NavbarItems = ({ navData }: NavbarItemsProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = Object.entries(navData);

  return (
    <nav className="bg-[#00878A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="#">
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="hidden md:flex md:ml-10">
              {navItems.slice(0, 3).map(([key, value], index) => (
                <Link
                  href={value.href}
                  key={index}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-[16px] font-medium"
                >
                  {value.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden xl:flex lg:flex md:flex xl:ml-4">
            <div className="flex items-center">
              {navItems.slice(3).map(([key, value], index) => (
                <Link
                  href={value.href}
                  key={index}
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-[16px] font-medium"
                >
                  {value.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isNavOpen ? "block" : "hidden"} md:hidden bg-[#00878A]`}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {navItems.map(([key, value], index) => (
            <Link
              href={value.href}
              key={index}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 transition duration-150 ease-in-out"
            >
              {value.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavbarItems;
