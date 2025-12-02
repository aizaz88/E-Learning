"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import avatar from "../../assets/avatar.webp";
const Hero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (search === "") {
      return;
    } else {
      router.push(`/courses?title=${search}`);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 py-10 lg:py-0 relative overflow-hidden">
        {/* Animated background circle */}
        <div className="absolute top-[110px] lg:left-[100px]  w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] hero_animation rounded-full opacity-20 lg:opacity-30"></div>
        {/* Hero banner Image */}
        <div className="lg:w-1/2 flex items-center justify-center z-10 mb-8 lg:mb-0">
          <Image
            src={avatar}
            alt=""
            width={400}
            height={400}
            className="rounded-full"
          />
        </div>
        {/* Hero content section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Main headline */}
          {/* LEFT: Text Content */}

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-5">
            Learn. Grow.
            <span className="text-blue-600 dark:text-blue-400"> Succeed.</span>
          </h1>
          {/* Subtitle or description */}
          <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl">
            Master new skills with EduSphere — your all-in-one learning platform
            for courses, certifications, and professional growth.
          </p>
          {/* Search form */}
          <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search Courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-12 px-4 pr-12 text-lg text-gray-700 bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="absolute right-0 top-0 h-12 w-12 flex items-center justify-center bg-blue-500 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                <BiSearch className="text-white" size={24} />
              </button>
            </div>
          </form>
          {/* Trust indicators - client avatars and text */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />

              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                width={40}
                height={40}
                className="rounded-full ml-[-20px]"
              />

              <Image
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt=""
                width={40}
                height={40}
                className="rounded-full ml-[-20px]"
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold">500+</span> People already trust
              us.{" "}
              <Link href="/courses" className="text-blue-500 hover:underline">
                View Courses
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
