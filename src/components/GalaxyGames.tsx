import React from 'react';

function GalaxyGames() {
  return (
    <div
      id="galaxy-games"
      className="relative 2xl:min-h-[70vh] 2xl:pt-10 bg-contain bg-bottom-custom bg-no-repeat md:bg-center md:bg-cover bg-primary z-10 bg-galaxy-games flex items-center justify-center "
    >
      <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01011f] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#01001e] to-transparent"></div>
      <div className="absolute inset-0 bg-primary/10 "></div>
      <div className="flex flex-col items-center justify-center mb-64 relative z-10">
        <div data-aos="fade-up">
          <img
            className="w-40 h-16 bg-cover mb-10 mx-auto"
            src="/desktop/Lens_Flare_purple_PNG.png"
            alt=""
          />
          <div>
            <img
              src="/desktop/logo_v.png"
              className="w-44 -mt-8 mb-16"
              alt=""
            />
          </div>
        </div>
        {/* <h1 className="text-4xl uppercase text-white -mt-14 mb-16">
          Galaxy Games
        </h1> */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-7 lg:gap-12">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border-[2.5px] border-[#ea513d] w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/desktop/left.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#c65445]/30 to-transparent"></div>
            <div className="relative z-10 text-center">
              <div>
                <img src="/desktop/hero logo-04.png" alt="" />
              </div>
              <h2 className="text-[#ea513d] font-semibold">
                Raiders of the Sonic Matter
              </h2>
            </div>
            <a
              className="btn-primary w-full relative z-10 flex items-center justify-center gap-2"
              href="https://platform.hauntedspace.io/launcher "
            >
              <span>PLAY NOW</span>
              <span>|</span>
              <span className="text-xs">BETA</span>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="border-[2.5px] border-[#4868a5] w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/desktop/mid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#4868a5]/30 to-transparent"></div>
            <div className="relative z-10 text-center">
              <div>
                <img src="/desktop/hero logo-04.png" alt="" />
              </div>
              <h2 className="text-[#4e7dd3] font-semibold">SURVIVAL</h2>
            </div>
            <button className="btn-primary w-full relative z-10">
              COMING SOON
            </button>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="border-[2.5px] border-violet-700 w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/desktop/right.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#6859df]/30 to-transparent"></div>
            <div>
              <div className="relative z-10 text-center">
                <div>
                  <img src="/desktop/hero logo-04.png" alt="" />
                </div>
                <h2 className="text-violet-700 font-semibold">MINI GAME</h2>
              </div>
            </div>
            <a
              className="btn-primary w-full text-center relative z-10"
              href="https://t.me/HauntedSpaceMinigamebot/app?startapp=home"
            >
              PLAY NOW
            </a>
          </div>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className=" mt-14 text-slate-200 tracking-[2.7px]"
        >
          DISCOVER OUR UNIVERSE
        </h1>
      </div>
    </div>
  );
}

export default GalaxyGames;
