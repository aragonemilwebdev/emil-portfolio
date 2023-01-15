import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <>
      <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ECF0F3]' : 'fixed w-full h-20 z-[100]'}>
        <div className=" flex justify-between items-center h-full px-2 2xl:px-16">
          <div>
            <Link href="/">
            <Image
              src="/navLogo.png"
              alt="/"
              width="100"
              height="50"
            />
            </Link>
          </div>
          <div className=" hidden md:flex items-center">
            <div>
              <ul className=" flex gap-10">
                <Link href="/">
                  <li className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-125  hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-125 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-125 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Projects
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-125 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Skills
                  </li>
                </Link>
                <Link href="#contact">
                  <li className="text-[16px] bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-125 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" hidden md:flex items-center">
            <ul className=" flex gap-2">
              <Link href="#">
                <li>
                  <FaGithub size={25} className=" hover:scale-150" />
                </li>
              </Link>
              <Link href="#">
                <li>
                  <FaFacebook size={25} className=" hover:scale-150" />
                </li>
              </Link>
              <Link href="#">
                <li>
                  <FaLinkedin size={25} className=" hover:scale-150" />
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className=" md:hidden">
            <AiOutlineMenu size={20} />
          </div>
        </div>
        <div
          className={
            nav
              ? " md:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? " md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] m:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : " fixed left-[-100%] ease-in duration-500"
            }
          >
            <div className=" pb-5 border-b border-gray-300 mb-5">
              <div className=" flex justify-between items-center">
                <Image
                  src="/navLogo.png"
                  alt="/"
                  width="100"
                  height="50"
                  className=" w-[90px] md:w-[100px]"
                />
                <div
                  onClick={handleNav}
                  className=" rounded-full shadow-lg shadow-gray-400 p-1 md:p-2 cursor-pointer gradiant-bg text-white"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className=" flex">
              <ul>
                <Link href="/">
                  <li className=" text-sm md:text-[16px] py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-110  hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Home
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-sm md:text-[16px] py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-110 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    About
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-sm md:text-[16px] py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-110 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Projects
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-sm md:text-[16px] py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-110 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Skills
                  </li>
                </Link>
                <Link href="/">
                  <li className="text-sm md:text-[16px] py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#000000] hover:font-bold hover:scale-110 hover:from-[#13B0F5] hover:to-[#E70FAA]">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className=" mt-20 pb-5 border-b border-gray-300 flex">
              <p className=" uppercase gradiant-bg bg-clip-text font-bold text-transparent">
                Let&apos;s Connect
              </p>
            </div>
            <div className=" flex justify-start gap-5 sm:gap-10 items-center w-full sm:w-[80%] mt-5">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                <Link href="#">
                    <FaGithub className=' w-5 h-5 lg:w-7 lg:h-7' />
                </Link>
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                <Link href="#">
                    <FaFacebook className=' w-5 h-5 lg:w-7 lg:h-7' />
                </Link>
              </div>
              <div className=" rounded-full shadow-lg shadow-gray-400 p-[6px] sm:p-2 gradiant-bg text-white hover:scale-125">
                <Link href="#">
                    <FaLinkedin className=' w-5 h-5 lg:w-7 lg:h-7' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
