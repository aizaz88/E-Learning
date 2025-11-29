"use client";

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
};

const Header: FC<Props> = ({ activeItem, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") setOpenSideBar(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-[80]">
      <div
        className={`h-[80px] w-full border-b dark:border-white/10 transition-all duration-500 
        ${
          active
            ? "bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="w-[95%] max-w-[1300px] mx-auto h-full flex items-center justify-between px-3">
          {/* LOGO */}
          <Link
            href="/"
            className="text-[26px] font-bold text-black dark:text-white tracking-wide"
          >
            EduSphere
          </Link>

          {/* NAVIGATION + THEME + USER */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <div className="hidden md:flex">
              <NavItems activeItem={activeItem} isMobile={false} />
            </div>

            {/* Theme Toggle */}
            <ThemeSwitcher />

            {/* Mobile Menu Icon */}
            <button className="md:hidden" onClick={() => setOpenSideBar(true)}>
              <HiOutlineMenuAlt3 className="text-3xl text-black dark:text-white" />
            </button>

            {/* Profile Icon (Desktop only) */}
            <button onClick={() => setOpen(true)} className="hidden md:block">
              <HiOutlineUserCircle className="text-[28px] text-black dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {openSideBar && (
        <div
          id="screen"
          onClick={handleClose}
          className="fixed top-0 left-0 w-full h-screen bg-black/40 backdrop-blur-sm z-[999]"
        >
          <div className="fixed right-0 top-0 w-[70%] max-w-[320px] h-full bg-white dark:bg-slate-900 shadow-xl p-5 transition-all duration-300">
            <NavItems activeItem={activeItem} isMobile={true} />

            <button
              onClick={() => setOpen(true)}
              className="mt-6 flex items-center gap-2 text-black dark:text-white"
            >
              <HiOutlineUserCircle size={26} />
              <span className="text-[16px]">Account</span>
            </button>

            <p className="absolute bottom-6 left-5 text-sm text-gray-600 dark:text-gray-300">
              © 2025 EduSphere
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
