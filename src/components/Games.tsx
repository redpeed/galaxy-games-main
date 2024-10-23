import React from 'react';
import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { SiEpicgames } from 'react-icons/si';

function Games() {
  return (
    <div id="games">
      {/* GAME ONE */}
      <div className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-one bg-cover bg-center relative z-10 bg-primary py-20 text-white px-0 md:px-2">
        <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#060c2487] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#060c2487] to-transparent"></div>
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto z-10 relative  ">
          <div
            className="flex justify-start items-center mb-10 md:mb-0 px-10
         md:px-2"
            data-aos="fade-right"
          >
            <img
              className="w-32 h-12 md:w-40 md:h-16  rotate-90 -ml-16 sm:ml-0"
              src="/desktop/Lens_Flare_purple_PNG.png"
              alt=""
            />
            <div className="-ml-8 md:-ml-10">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                SINGLE PLAYER
              </p>
              <div>
                <img
                  src="/desktop/hero logo-04.png"
                  className="w-72 -ml-2"
                  alt=""
                />
              </div>
              <h2 className="text-[#c65445]  text-sm 2xl:text-lg md:text-lg font-semibold">
                Raiders of the Sonic Matter
              </h2>
            </div>
          </div>
          <div className=" flex md:flex-row flex-col items-center justify-between max-w-4xl 2xl:max-w-7xl mx-auto  md:pr-10 mt-5 md:gap-y-0 gap-y-7 text-center md:text-left px-7 md:px-0">
            <div data-aos="fade-right" className='md:w-[50%] sm:w-[80%] w-[95%] 2xl:w-[45%]'>
              {/* <video
                className="rounded-2xl overflow-hidden mb-2 md:mb-0 md:h-[250px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/desktop/hauntedSpace2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <iframe
  className="rounded-2xl overflow-hidden mb-2 md:mb-0 md:h-[250px] 2xl:h-[350px]"
  width="100%"
  height="250"
  src="https://www.youtube.com/embed/LZ45WHLBlkc?si=ovZN72J_EAWL0lFu"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
            </div>
            <div className="max-w-56" data-aos="fade-left">
              <p className="mb-7 leading-tight text-slate-200">
                Survive in the Haunted Space, find out what happened to humanity
                and to your body
              </p>
              {/* <a
                className=" tracking-widest btn-primary flex items-center justify-center gap-2 px-8 mb-3 mx-auto md:mx-0"
                href={'https://platform.hauntedspace.io/launcher '}
                target="blank"
              >
                <span>PLAY NOW</span>
                <span>|</span>
                <span className="text-xs">BETA</span>
              </a> */}
              <a
                className="tracking-widest btn-primary flex items-center justify-center gap-2 px-6 mb-3 mx-auto md:mx-0 w-[200px] 2xl:w-[260px] text-center"
                href={'https://platform.hauntedspace.io/launcher '}
                target="blank"
              >
                <span>PLAY NOW</span>
                <span>|</span>
                <span className='text-xs'>BETA</span>
              </a>
              <p className="text-xs 2xl:text-base mb-7 text-slate-400">
                *Genesis Pass NFT required
              </p>
              <div className="flex items-center justify-center md:justify-start gap-5 text-white">
                <FaPlaystation size={25} />
                <FaXbox size={25} />
                <FaSteam size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GAME TWO */}
      <div className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-two bg-cover bg-center relative z-10 bg-primary py-20 text-white md:px-0">
        <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#060c2487] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#060c2487] to-transparent"></div>
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto  z-10 relative ">
          <div
            className="flex justify-end items-center mb-10 md:mb-0 px-10 md:px-0"
            data-aos="fade-left"
          >
            <div className="-mr-8 md:mr-10 text-right">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                MULTI PLAYER
              </p>
              <div className="-mr-2">
                <img src="/desktop/hero logo-04.png" className="w-72" alt="" />
              </div>
              <h2 className="text-[#015cba] ml-5 text-xs 2xl:text-base md:text-lg font-semibold">
                SURVIVAL
              </h2>
            </div>
            <img
              className="w-32 h-12 md:w-40 md:h-16  rotate-90 -mr-[70px] md:mr-0 md:-ml-20 sm:ml-0"
              src="/desktop/Lens_Flare_purple_PNG.png"
              alt=""
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left max-w-4xl 2xl:max-w-7xl  mx-auto md:pl-10 mt-5 px-7 gap-y-7 md:pr-0 md:gap-y-0">
            <div className="max-w-48" data-aos="fade-right">
              <p className="mb-7 leading-tight text-slate-200">
                Join the army of raiders, fight against other player, earn real
                money
              </p>
              <button className="btn-primary px-8 mb-7 2xl:w-52 tracking-widest">
                Coming Soon
              </button>
              <div className="text-white">
                <SiEpicgames size={25} className="mx-auto md:mx-0" />
              </div>
            </div>
            <div data-aos="fade-left" className='2xl:w-[45%]'>
              <img
                className="rounded-xl overflow-hidden mb-2 md:mb-0 w-full"
                src="/desktop/screen_Video_MultiPlayer.PNG"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* GAME THREE */}
      <div className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-three bg-cover bg-center relative z-10 bg-primary py-10 text-white px-10 md:px-2">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01011f] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#01001e] to-transparent"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto  z-10 relative">
          <div
            className="flex justify-start items-center mb-10 md:mb-0"
            data-aos="fade-right"
          >
            <img
              className="w-32 h-12 md:w-40 md:h-16 rotate-90 -ml-16 sm:ml-0"
              src="/desktop/Lens_Flare_purple_PNG.png"
              alt=""
            />
            <div className="-ml-10">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                MOBILE
              </p>
              <div>
                <img
                  src="/desktop/hero logo-04.png"
                  className="w-72 -ml-2"
                  alt=""
                />
              </div>
              <h2 className="text-violet-700 text-xs 2xl:text-base md:text-lg font-semibold">
                MINIGAME
              </h2>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-4xl mx-auto 2xl:max-w-7xl relative text-center md:text-left">
            <div className="max-w-48" data-aos="fade-right">
              <p className="mb-7 leading-tight text-slate-200">
                Survive as long as you can, collect rewards and earn GAGA tokens
              </p>
              <a
                className="tracking-widest btn-primary flex items-center justify-center gap-2 px-12 mb-3 mx-auto md:mx-0 2xl:w-52"
                href="https://t.me/HauntedSpaceMinigamebot/app?startapp=home"
                target="blank"
              >
                <span>PLAY NOW</span>
              </a>
              <p className="text-xs 2xl:text-base mb-7 text-slate-400">
                *Other platforms coming soon
              </p>
              {/* <div className="flex items-center justify-start gap-5 text-white "> */}
                <a
                  href="https://t.me/hauntedspace "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram size={25} className="mx-auto md:mx-0" />
                </a>
              {/* </div> */}
            </div>
            <div data-aos="fade-left">
              {/* <img
                className="rounded-xl overflow-hidden  relative mb-8 md:mb-0 md:-top-28"
                src="/desktop/Mobile_PNG.png"
                alt=""
              /> */}
              <video
                className="rounded-xl overflow-hidden w-[400px] h-[400px]  relative mb-8 md:mb-0 md:-top-28"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/desktop/minigame.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
