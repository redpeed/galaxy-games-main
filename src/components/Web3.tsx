import React from 'react';
import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';
import { FaDiamond, FaTelegram } from 'react-icons/fa6';
import { SiEpicgames } from 'react-icons/si';

function Web3() {
  return (
    <div
      id="web3"
      className="2xl:min-h-[70vh] 2xl:pt-20 bg-web3 bg-cover bg-center bg-no-repeat bg-primary relative text-white pt-5 bg-red-900"
    >
      <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#060c2487] to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01001e] to-transparent"></div>

      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center mb-24"
        >
          <img
            className="w-40 h-16 bg-cover mb-10"
            src="/desktop/Lens_Flare_purple_PNG.png"
            alt=""
          />
          <h1 className="text-4xl uppercase text-white -mt-14">Web 2 meets web 3</h1>
        </div>
        <div className="max-w-4xl 2xl:max-w-[90rem] mx-auto flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-20">
          <div
            data-aos="zoom-in"
            className="w-80 h-80 relative top-10 lg:static 2xl:w-[27rem] 2xl:h-[27rem]"
            style={{
              backgroundImage: `url('/desktop/Planet_PNG_v2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center justify-center gap-6 relative -top-[15%] 2xl:-top-[5%]">
              <div className="flex flex-col items-center justify-center z-10 gap-2">
                <h1 className="text-sm 2xl:text-lg tracking-[2.7px] text-slate-200">
                  SINGLE PLAYER
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <FaDiamond size={7} />
                  <div className="h-32 border-l " />
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/desktop/hero logo-04.png"
                    className="w-52"
                    alt=""
                  />
                </div>
                <h2 className="text-[#c65445] 2xl:text-lg text-sm font-semibold text-center mb-7">
                  Raiders of the Sonic Matter
                </h2>
                <div className="flex items-center  justify-center gap-4 text-white">
                  <FaPlaystation size={20} />
                  <FaXbox size={20} />
                  <FaSteam size={20} />
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="w-[255px] text-center">
            <div className="flex items-center justify-center">
              <FaDiamond size={7} />
              <div className="flex-grow border-b rounded-full" />
              <FaDiamond size={7} />
            </div>
            <h1 className="text-sm 2xl:text-lg tracking-[2.7px] text-slate-200">
              WEB2 MEETS WEB3
            </h1>
          </div>
          <div
            data-aos="zoom-in"
            className="w-80 h-80 2xl:w-[27rem] 2xl:h-[27rem]"
            style={{
              backgroundImage: `url('/desktop/Planet_Eclipse_PNG_v2.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="flex flex-col items-center justify-center gap-6 relative -top-[15%] 2xl:-top-[5%]">
              <div className="flex flex-col items-center justify-center z-10 gap-2">
                <h1 className="text-sm 2xl:text-lg tracking-[2.7px] text-slate-200">
                  MULTI PLAYER
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <FaDiamond size={7} />
                  <div className="h-32 border-l " />
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="/desktop/hero logo-04.png"
                    className="w-52"
                    alt=""
                  />
                </div>
                <h2 className="text-[#015cba] 2xl:text-lg text-sm font-semibold mb-7 text-center">
                  SURVIVAL
                </h2>
                <div className="flex items-center justify-center gap-4 text-white">
                  <SiEpicgames size={20} />
                  <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                  <FaTelegram size={20} />
              </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web3;
