import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoOne from '../../public/desktop/logo-one.svg';
import logoTwo from '../../public/desktop/logo-two.svg';

const navLinks = [
  {
    id: 1,
    title: 'Home',
    href: '#home',
  },
  {
    id: 2,
    title: 'Web3',
    href: '#web3',
  },
  {
    id: 3,
    title: 'Games',
    href: '#games',
  },
  {
    id: 4,
    title: 'Token',
    href: '#token',
  },
  {
    id: 5,
    title: 'Roadmap',
    href: '#roadmap',
  },
];

function Home() {
  const { hash } = useLocation();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.location.hash = '#home';
    if (toggle) {
      // Disable Y-axis scroll on both body and html
      document.body.style.overflowY = 'hidden';
      document.documentElement.style.overflowY = 'hidden'; // Prevent scroll on the html element too
    } else {
      // Enable scroll again on both body and html
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    }

    // Clean-up to remove styles when component unmounts
    return () => {
      document.body.style.overflowY = 'auto';
      document.documentElement.style.overflowY = 'auto';
    };
  }, [toggle]);

  return (
    <div
      id="home"
      className="relative h-screen md:h-[107vh] bg-top bg-cover bg-hero "
    >
      {/* <div className="absolute inset-0 bg-blue-900/30 "></div> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/desktop/homepage.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* <div
    className="group flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
    <div className="space-y-2">
        <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
        <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
    </div>
</div> */}

      {/* Modile Nav */}
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
        <img
          src="/mobile/ggg_v.png"
          alt=""
          className="w-10 h-10 object-cover"
        />
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

      <div className="relative z-10 flex flex-col pt-20 justify-center items-center h-full text-center text-white">
        <div data-aos="fade-up" data-aos-delay="600">
          <img
            src="/desktop/logo_v.png"
            className="w-[18rem] 2xl:w-[30rem]"
            alt=""
          />
        </div>
        <a
          data-aos="fade-up"
          data-aos-delay="850"
          href="#web3"
          className="mt-4 btn-primary px-10 2xl:mt-8  "
        >
          Learn More
        </a>
      </div>
      <img
        src="/desktop/bottom-curve.png"
        className="absolute bottom-0 left-0 right-0 z-30"
        alt=""
      />
    </div>
  );
}

export default Home;
