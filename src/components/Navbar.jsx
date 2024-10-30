// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Import images and other resources as needed
import logoOne from '../../public/desktop/logo-one.svg';
import logoTwo from '../../public/desktop/logo-two.svg';

const navLinks = [
  { id: 1, title: 'Home', href: '/#home' },
  { id: 2, title: 'Web3', href: '/#web3' },
  { id: 3, title: 'Games', href: '/#games' },
  { id: 4, title: 'Token', href: '/#token' },
  { id: 5, title: 'Roadmap', href: '/#roadmap' },
];

function Navbar() {
  const { hash } = useLocation();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }

    // Clean-up on unmount
    return () => {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    };
  }, [toggle]);

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`${
          toggle ? 'w-52 opacity-100' : 'w-0 opacity-70'
        } absolute top-0 right-0 bottom-0 z-30 transition-all duration-300 bg-primary overflow-hidden`}
      >
        <ul className="flex flex-col items-start justify-center uppercase text-base space-y-2 text-slate-300 p-5 pt-14">
          {navLinks.map((val) => (
            <li key={val.id} onClick={() => setToggle(false)}>
              <a href={val.href} className="hover:text-slate-100 text-xl">
                {val.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="flex lg:hidden absolute top-0 left-0 right-0  justify-between items-center px-3 py-3 text-white bg-slate-900">
        <img src="/mobile/ggg_v.png" alt="" className="w-10 h-10 object-cover" />
        <img src="/desktop/logo_v.png" alt="" className="md:w-32 w-24" />
        <div
          onClick={() => setToggle((prev) => !prev)}
          className=" flex h-10 w-10 cursor-pointer items-center justify-center p-2 relative z-[999]"
        >
          <div className="space-y-2 ">
            <span
              className={`${
                toggle ? 'translate-y-1.5 rotate-45 h-[3px]' : 'h-[2px]'
              } block  w-8 origin-center rounded-full bg-white transition-transform ease-in-out `}
            ></span>
            <span
              className={`${
                toggle
                  ? 'w-8 -translate-y-1.5 -rotate-45 h-[3px]'
                  : 'w-6 h-[2px]'
              } block   ml-auto origin-center rounded-full bg-white transition-transform ease-in-out`}
            ></span>
          </div>
        </div>
      </nav>

      {/* Desktop Nav */}
      <nav
        data-aos="fade-down"
        data-aos-delay="500"
        className=" hidden absolute top-0 left-0 right-0 lg:flex justify-between items-center px-6 py-3 text-white z-20 bg-slate-900"
      >
        <div className="flex items-center space-x-4 gap-3">
          <div className="flex items-center justify-center gap-6">
            <img src={logoOne} alt="" className="w-7" />
            <img src={logoTwo} alt="" className="w-20" />
          </div>

          <ul className="hidden lg:flex uppercase tracking-[2.7px]">
            {navLinks.map((link) => (
              <li key={link.id} className="relative px-7">
                <a
                  href={link.href}
                  className={`${
                    hash === link.href ? 'text-white' : 'text-slate-400'
                  } text-sm 2xl:text-lg hover:text-white duration-200`}
                >
                  {link.title}
                </a>
                {hash === link.href && (
                  <img
                    className="w-44 h-12 bg-cover mb-10 absolute left-0 top-5 2xl:top-6"
                    src="/desktop/Lens_Flare_purple_PNG.png"
                    alt=""
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://t.me/HauntedSpaceMinigamebot/app?startapp=home "
          className="btn-primary px-7"
        >
          Play Now
        </a>
      </nav>
    </>
  );
}

export default Navbar;
