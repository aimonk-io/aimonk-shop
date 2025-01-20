"use client";

import { useState } from "react";

import Link from "next/link";
import MobileMenu from "./mobile-navbar";
import useMediaQuery from "@/libs/hooks/use-media-query";
import useScroll from "@/libs/hooks/use-scroll";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { NavBarProps } from "@/libs/Types/Navbar/Index";
import Cart from "../Cart/Cart";



export default function NavBar({ navLinks }: NavBarProps) {
  const scrolled = useScroll(50);
  const { isMobile, isTablet } = useMediaQuery();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery(""); // Clear the search input when closing
    }
  };
  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl" : "bg-white/0"} z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full px-2.5 lg:px-20 relative">
          <Link href="/" className="flex items-center font-display text-2xl">
            {/* <Image
              src="/aimonk-120x-logo.svg"
              alt="Kokkivo logo"
              width="100"
              height="60"
              className="mr-2 rounded-sm"
            /> */}
            <div className="bg-black p-[0.1rem]">
              <h1 className="text-white font-extrabold">Kokkivo</h1>
            </div>
          </Link>
          {isMobile || isTablet ? (
            <button
              className="fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden"
              onClick={handleMobileMenuToggle}
            >
              <svg
                className="lucide lucide-menu h-5 w-5 text-purple-700"
                fill=""
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          ) : (
            <>
              <nav
                aria-label="Main"
                data-orientation="horizontal"
                dir="ltr"
                className="relative hidden lg:block"
              >
                <div>
                  <ul
                    data-orientation="horizontal"
                    className="relative flex flex-row gap-2 px-2 py-0.5"
                    dir="ltr"
                  >
                    <div
                      className={`${scrolled ? "" : "inset-0"} absolute -z-[1]`}
                    >
                      <div
                        className={`absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 
                      ${scrolled
                          ? "rounded-none drop-shadow-none"
                          : "rounded-full drop-shadow-sm backdrop-blur-l"
                        } border border-gray-200 transition-all bg-white/75`}
                      />
                    </div>
                    {navLinks?.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80 transition-colors ease-out cursor-pointer"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2"></div>
              </nav>
              <div className="flex flex-row items-center gap-6">
                {isSearchOpen ? (
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="rounded-full border border-gray-300 px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      onClick={handleSearchToggle}
                      className="absolute right-0 top-0 mt-1.5 mr-2 text-gray-600 hover:text-gray-800"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <button onClick={handleSearchToggle} className="flex items-center">
                    <MagnifyingGlassIcon style={{ width: "25px", height: "25px" }} />
                  </button>
                )}
                <Cart/>
                {/* <AddToCartIcon counter={1} onClick={handleCartClick}/> */}
              </div>
            </>
          )}
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          menuItems={navLinks}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
