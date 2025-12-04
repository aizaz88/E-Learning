"use client";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModel from "../utils/CustomModel";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import { useSelector } from "react-redux";
import Image from "next/image";
import avatarDefault from "../../client/assets/avatar.png";
import { useSession } from "next-auth/react";
import {
  useLogoutQuery,
  useSocialAuthMutation,
} from "../redux/features/auth/authApi";
import toast from "react-hot-toast";
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem: number;
  route: string;
  setRoute: (route: string) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen, open, route, setRoute }) => {
  const [active, setActive] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const { user } = useSelector((state: any) => state.auth);
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (!user && data) {
      socialAuth({
        email: data?.user?.email, // FIXED spelling
        name: data?.user?.name,
        avatar: data?.user?.image, // FIXED field name
      });
    }

    if (data === null) {
      if (isSuccess) {
        toast.success("Login Successfully!");
      }
    }
    if (data === null) {
      setLogout(true);
    }
  }, [data, user]);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY > 80);
    };

    // run only on client
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = (e: any) => {
    if (e.target.id === "screen") setOpenSideBar(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-[80]">
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
          <div className="flex items-center gap-6 ">
            {/* Desktop Nav */}
            <div className="hidden md:flex ">
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
              {user ? (
                <Link href={"/profile"}>
                  <Image
                    src={user.avatar ? user.avatar.url : avatarDefault}
                    alt="profile"
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                    style={{
                      border: activeItem === 5 ? "2px solid #37a39a " : "none",
                    }}
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle className="text-[28px] text-black dark:text-white" />
              )}
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

      {route === "Login" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Login}
            />
          )}
        </>
      )}
      {route === "Sign-Up" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={SignUp}
            />
          )}
        </>
      )}
      {route === "Verification" && (
        <>
          {open && (
            <CustomModel
              open={open}
              setOpen={setOpen}
              setRoute={setRoute}
              activeItem={activeItem}
              component={Verification}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
