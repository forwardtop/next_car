"use client";
import { useEffect, useState } from "react";
import { close, logo, menu } from "public/assets";
import { navLinks } from "constants/";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Add an event listener to check for scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the scroll position value based on your needs
      setIsSticky(scrollPosition > 100);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full flex py-6 justify-center items-center navbar transition-all duration-300 ease-in-out ${
        isSticky
          ? "fixed top-0 bg-white h-12 shadow-md"
          : "h-20 bg-transparent"
      }`}
    >
      <Link href="/">
        <Image src={logo} alt="qwikio" width={200} height={80} />
      </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-12">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <Link
              href={`${nav.link}`}
              className={`${isSticky ? "text-gray-500" : "text-white"} text-decoration-none`}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center p-2">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={24}
          height={24}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href="/who-we-are" className="text-white text-decoration-none">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
