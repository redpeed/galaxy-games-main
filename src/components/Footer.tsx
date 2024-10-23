import React from 'react';
import { FaDiscord, FaSteam } from 'react-icons/fa';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { SiOpensea } from 'react-icons/si';

function Footer() {
  return (
    <div className="bg-primary text-slate-200 pt-10 pb-3 px-2">
      <div data-aos="zoom-in" className="max-w-5xl  mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-5 md:gap-0">
          <div className="flex-[0.3]">
            <img src="/desktop/logo_v.png" className="w-40 mb-5" alt="" />
          </div>
          <div className="hidden md:block md:flex-[0.3]">
            <ul className="flex flex-col items-start justify-center uppercase text-sm 2xl:text-lg space-y-2 text-slate-400">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#web3" className="hover:text-gray-300">
                  Web 2 meets web 3
                </a>
              </li>
              <li>
                <a href="#games" className="hover:text-gray-300">
                  Games
                </a>
              </li>
              <li>
                <a href="#token" className="hover:text-gray-300">
                  Token
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-gray-300">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-[0.4] text-right">
            <div className="hidden md:flex items-center justify-center md:justify-end gap-5 mb-8">
              <a
                href="https://discord.gg/p6zZDvgNUW "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={25} />
              </a>
              <a
                href="https://twitter.com/Galaxy_Games__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25} />
              </a>
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://opensea.io/collection/hsgenesispass "
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOpensea size={25} />
              </a>
            </div>
            <div className="mb-3 text-sm 2xl:text-lg tracking-[2.7px] leading-tight text-[#015cba] text-center md:text-right">
              <p>STAY UP TO DATE</p>
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>
            <div className="w-80 md:ml-auto">
              <div className="flex items-center justify-center  md:justify-end">
                <input
                  placeholder="email address"
                  className="pl-4 py-2 w-[70%] border text-sm focus:outline-none border-[#015cba] rounded-l-full bg-primary text-slate-400 placeholder-slate-300"
                />
                <button className="bg-gradient-to-b w-[30%]  from-purple-600 to-indigo-600 text-white uppercase text-sm py-2 px-4 rounded-r-full hover:bg-gradient-to-t hover:to-purple-800 hover:from-indigo-800 duration-300 border border-purple-600">
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center md:justify-end gap-5 mt-8">
              <a
                href="https://discord.gg/p6zZDvgNUW "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={25} />
              </a>
              <a
                href="https://twitter.com/Galaxy_Games__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25} />
              </a>
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://opensea.io/collection/hsgenesispass "
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOpensea size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t text-slate-400 tracking-[2.7px] border-white pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs 2xl:text-base">
          <p>© 2024 GALAXY GAMES. All Rights Reserved.</p>
          <p>PRIVACY POLICY - TERMS & CONDITIONS</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
