"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ FIX: Return placeholder instead of null
  if (!mounted) {
    return <div className="mx-4 w-[25px] h-[25px]" />;
  }

  return (
    <div className="mx-4">
      {theme === "dark" ? (
        <BiSun
          size={25}
          className="cursor-pointer text-white"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiMoon
          size={25}
          className="cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};
