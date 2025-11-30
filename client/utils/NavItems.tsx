"use client";

import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const navLinks = [
  { name: "Home", url: "/" },
  { name: "Courses", url: "/courses" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "FAQ", url: "/faq" },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <nav
      className={`${
        isMobile
          ? "flex flex-col gap-6 mt-8 text-lg"
          : "flex items-center gap-10  text-[17px]" // DESKTOP SPACING FIXED
      }`}
    >
      {navLinks.map((link, index) => {
        const isActive = activeItem === index;

        return (
          <Link
            key={index}
            href={link.url}
            className={`transition font-medium tracking-wide m-6
              ${
                isActive
                  ? "text-black dark:text-white font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
