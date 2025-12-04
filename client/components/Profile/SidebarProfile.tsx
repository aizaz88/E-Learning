import React from "react";
import Image from "next/image";
import avatarDefault from "../../assets/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FC } from "react";
import Link from "next/link";
type Props = {
  user: any;
  active: number;
  setActive: (active: number) => void;
  avatar: string | null;
  logOutHandler: () => void;
};

const SidebarProfile: FC<Props> = ({
  user,
  active,
  setActive,
  avatar,
  logOutHandler,
}) => {
  return (
    <div className="w-full">
      {/* My Account */}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user.avatar || avatar ? user.avatar.url || avatar : avatarDefault
          }
          alt="avatar"
          width={20}
          height={20}
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black">
          My Account
        </h5>
      </div>

      {/* Change Password */}
      <div
        className={`w-full dark:text-white flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} />
        <h5 className="pl-2 800px:block hidden">Change Password</h5>
      </div>
      {/* Enrolled courses */}
      <div
        className={`w-full dark:text-white flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} />
        <h5 className="pl-2 800px:block hidden">Enrolled Courses</h5>
      </div>

      {/* admin courses */}
      {user?.role === "admin" && (
        <Link
          className={`w-full dark:text-white flex items-center px-3 py-4 cursor-pointer ${
            active === 6 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
          }`}
          href={"/admin"}
          onClick={() => setActive(6)}
        >
          <MdOutlineAdminPanelSettings size={20} />
          <h5 className="pl-2 800px:block hidden">Admin Dashboard</h5>
        </Link>
      )}
      {/* logout courses */}
      <div
        className={`w-full dark:text-white flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? "dark:bg-slate-800 bg-white" : "bg-transparent"
        }`}
        onClick={() => logOutHandler()}
      >
        <AiOutlineLogout size={20} />
        <h5 className="pl-2 800px:block hidden">Log Out </h5>
      </div>
    </div>
  );
};

export default SidebarProfile;
