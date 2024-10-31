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
{/* Mobile Navbar */}
<nav 
className="flex lg:hidden fixed top-0 left-0 right-0 justify-between items-center px-4 py-3 text-white z-20"
style={{ backgroundColor: '#01001e' }}>
  <div className="flex items-center">
    <img src={logoOne} alt="Logo" className="w-10 h-10" />
    {/* If you want to include the second logo */}
    {/* <img src={logoTwo} alt="Logo Two" className="w-20 ml-2" /> */}
  </div>

<div
  onClick={() => setToggle((prev) => !prev)}
  className="flex h-10 w-10 cursor-pointer items-center justify-center relative z-20"
>
  {/* Hamburger Icon */}
  <div className="space-y-1">
    <span
      className={`block w-8 bg-white transition-transform duration-300 ${
        toggle ? 'transform rotate-45 translate-y-2' : ''
      }`}
      style={{ height: '2px' }}
    ></span>
    <span
      className={`block w-8 bg-white transition-opacity duration-300 ${
        toggle ? 'opacity-0' : ''
      }`}
      style={{ height: '2px' }}
    ></span>
    <span
      className={`block w-8 bg-white transition-transform duration-300 ${
        toggle ? 'transform -rotate-45 -translate-y-2' : ''
      }`}
      style={{ height: '2px' }}
    ></span>
  </div>
</div>
</nav>

{/* Overlay */}
{toggle && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-10"
    onClick={() => setToggle(false)}
  ></div>
)}

{/* Mobile Navigation Menu */}
<div
  className={`fixed top-0 left-0 h-full w-full bg-primary z-20 transform ${
    toggle ? 'translate-y-0' : 'translate-x-full'
  } transition-transform duration-300 flex flex-col`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <button
      onClick={() => setToggle(false)}
      className="text-white text-3xl focus:outline-none"
    >
      &times;
    </button>
  </div>

  {/* Logo at the Top Center */}
  <div className="flex justify-center">
    <img src={logoOne} alt="Logo" className="w-20 h-20" />
  </div>

  {/* Menu Items */}
  <div className="flex-grow flex items-center justify-center">
    <ul className="flex flex-col items-center uppercase text-base space-y-6 text-slate-300 p-6 pt-0">
      {navLinks.map((val) => (
        <li key={val.id} onClick={() => setToggle(false)}>
          <a href={val.href} className="hover:text-slate-100 text-4xl">
            {val.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
      

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
              <li key={link.id} className="navbar-item">
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
