"use client";
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "../utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { ProviderWrapper } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import { useLoadUserQuery } from "../redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader.tsx";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning={true}
      lang="en"
      className={`${poppins.variable} ${josefin.variable}`}
    >
      <body className="bg-white dark:bg-black duration-300">
        <ProviderWrapper>
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
            >
              <Custom>{children}</Custom>

              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
const Custom: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
