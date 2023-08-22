import React, { useState } from 'react';
import Button from '../Button';

const Navbar = () => {
  // open navigation
  const [active, setActive] = useState(false);
  // navbar blur events
  const [change, setChange] = useState(false);
  function changeColorNav() {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  }
  window.addEventListener('scroll', changeColorNav);

  return (
    <>
    {/* desktop nav */}
      <nav
        className={`w-full z-30 2xl:container duration-200 overflow-hidden mx-auto h-20 fixed flex items-center px-10 md:px-16 justify-between md:justify-between ${
          active ? 'backdrop-blur-sm' : ''
        } ${change ? 'bg-[#110f15]/50 backdrop-blur-sm' : 'backdrop-blur-none bg-transparent'}`}
      >
        {/* logo */}
        <span className="text-orange-600 font-extrabold text-3xl">SPYRO</span>
        {/* nav content */}
        <ul className="hidden sm:flex text-slate-50 min-[850px]:ml-16 min-[950px]:ml-20 md:ml-1 items-center justify-center gap-x-4 md:gap-x-8">
          <li className="duration-200 hover:text-orange-500">
            <a className="py-4 px-2 w-full h-full" href="#" target="_blank">
              Classes
            </a>
          </li>
          <li className="duration-200 hover:text-orange-500">
            <a className="py-4 px-2 w-full h-full" href="#" target="_blank">
              Team
            </a>
          </li>
          <li className="duration-200 hover:text-orange-500">
            <a className="py-4 px-2 w-full h-full" href="#" target="_blank">
              About Us
            </a>
          </li>
          <li className="duration-200 hover:text-orange-500">
            <a className="py-4 px-2 w-full h-full" href="#" target="_blank">
              Gallery
            </a>
          </li>
        </ul>
        {/* nav btn */}
        <span className="hidden sm:flex">
          <Button text="contact us" />
        </span>
        {/* menu icon */}
        <span
          onClick={() => setActive(!active)}
          className="text-orange-600 sm:hidden p-2 cursor-pointer"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </span>
      </nav>
      {/* moblie menu content */}
      <ul className={`flex sm:hidden overflow-hidden top-20 flex-col items-center justify-center fixed z-20 bottom-0 left-0 w-full h-max backdrop-blur-sm text-slate-50 duration-200 ${
          active ? 'translate-x-0' : ' translate-x-full'
        }`}
      >
        <li className="p-4 border-y border-orange-600 hover:bg-orange-600/20 duration-200 w-full ">
          <a
            className="py-4 px-2 w-full h-full flex items-center justify-center"
            href="#"
            target="_blank"
          >
            Classes
          </a>
        </li>
        <li className="p-4 border-y border-orange-600 border-opacity-50 border-e-orange-600 hover:bg-orange-600/20 duration-200 w-full ">
          <a
            className="py-4 px-2 w-full h-full flex items-center justify-center"
            href="#"
            target="_blank"
          >
            Team
          </a>
        </li>
        <li className="p-4 border-y border-orange-600 border-opacity-50 border-e-orange-600 hover:bg-orange-600/20 duration-200 w-full ">
          <a
            className="py-4 px-2 w-full h-full flex items-center justify-center"
            href="#"
            target="_blank"
          >
            About Us
          </a>
        </li>
        <li className="p-4 border-y border-orange-600 border-opacity-50 border-e-orange-600 hover:bg-orange-600/20 duration-200 w-full ">
          <a
            className="py-4 px-2 w-full h-full flex items-center justify-center"
            href="#"
            target="_blank"
          >
            Gallery
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
