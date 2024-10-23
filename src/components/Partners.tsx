import React from 'react';

function Partners() {
  const logosTwo = [
    '/desktop/11-14.png',
    '/desktop/12-06.png',
    '/desktop/12-07.png',
    '/desktop/12-08.png',
    '/desktop/Avalanche_png.png',
    '/desktop/MeritCircle_png.png',
  ];
  return (
    <div
      id="partners"
      className="relative 2xl:min-h-[70vh] 2xl:pt-52 bg-cover bg-primary z-10 flex items-center justify-center pt-14 "
    >
      <div className="absolute inset-0 bg-primary/10 "></div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center mb-20 md:mb-40 w-full  "
      >
        <img
          className="w-40 h-16 bg-cover md:mb-10"
          src="/desktop/Lens_Flare_purple_PNG.png"
          alt=""
        />
        <h1 className="text-4xl uppercase text-white md:-mt-14 md:mb-16">
          Partners
        </h1>
        <div className="wrapper w-full">
          <div className="itemLeft item1 flex items-center justify-center">
            <img src="/desktop/11-07.png" alt="" />
          </div>
          <div className="itemLeft item2 flex items-center justify-center">
            <img src="/desktop/11-08.png" alt="" />
          </div>
          <div className="itemLeft item3 flex items-center justify-center">
            <img src="/desktop/11-09.png" alt="" />
          </div>
          <div className="itemLeft item4 flex items-center justify-center">
            <img src="/desktop/11-10.png" alt="" />
          </div>
          <div className="itemLeft item5 flex items-center justify-center">
            <img src="/desktop/11-11.png" alt="" />
          </div>
          <div className="itemLeft item6 flex items-center justify-center">
            <img src="/desktop/11-14.png" alt="" />
          </div>
          <div className="itemLeft item7 flex items-center justify-center">
            <img src="/desktop/12-07.png" alt="" />
          </div>
          <div className="itemLeft item8 flex items-center justify-center">
            <img src="/desktop/12-08.png" alt="" />
          </div>
        </div>
        <div className="wrapper">
          <div className="itemRight item1 flex items-center justify-center">
            <img src="/desktop/Avalanche_png.png" alt="" />
          </div>
          <div className="itemRight item2 flex items-center justify-center">
            <img src="/desktop/MeritCircle_png.png" alt="" />
          </div>
          <div className="itemRight item3 flex items-center justify-center">
            <img src="/desktop/12-06.png" alt="" />
          </div>
          <div className="itemRight item4 flex items-center justify-center">
            <img src="/desktop/12-07.png" alt="" />
          </div>
          <div className="itemRight item5 flex items-center justify-center">
            <img src="/desktop/12-08.png" alt="" />
          </div>
          <div className="itemRight item6 flex items-center justify-center">
            <img src="/desktop/11-08.png" alt="" />
          </div>
          <div className="itemRight item7 flex items-center justify-center">
            <img src="/desktop/11-10.png" alt="" />
          </div>
          <div className="itemRight item8 flex items-center justify-center">
            <img src="/desktop/11-11.png" alt="" />
          </div>
        </div>
        <div className="space-y-4">
          {/* <div className="hidden md:flex items-center justify-center gap-4 wrapper ">
            <img src="/desktop/11-07.png" className="itemLeft item1" alt="" />
            <img src="/desktop/11-08.png" className="itemLeft item2" alt="" />
            <img src="/desktop/11-09.png" className="itemLeft item3" alt="" />
            <img src="/desktop/11-10.png" className="itemLeft item4" alt="" />
            <img src="/desktop/11-11.png" className="itemLeft item5" alt="" />
            <img src="/desktop/11-14.png" className="itemLeft item5" alt="" />
            <img src="/desktop/12-06.png" className="itemLeft item5" alt="" />
            <img src="/desktop/12-07.png" className="itemLeft item5" alt="" />
            <img src="/desktop/12-08.png" className="itemLeft item5" alt="" />
            <img
              src="/desktop/Avalanche_png.png"
              className="itemLeft item5"
              alt=""
            />
            <img
              src="/desktop/MeritCircle_png.png"
              className="itemLeft item5"
              alt=""
            />
          </div> */}
          {/* <div className="block md:hidden space-y-2 ">
            <div className="md:hidden flex items-center justify-center gap-2 ">
              {mobOne.map((val, ind) => (
                <div
                  key={ind}
                  className="p-1 w-[110px] h-[80px] rounded-xl bg-[#191933] flex items-center justify- overflow-hidden"
                >
                  <img src={val} alt="" />
                </div>
              ))}
            </div>
            <div className="md:hidden flex items-center justify-center gap-2 ">
              {mobTwo.map((val, ind) => (
                <div
                  key={ind}
                  className="p-1 w-[110px] h-[80px] rounded-xl bg-[#191933] flex items-center justify- overflow-hidden"
                >
                  <img src={val} alt="" />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Partners;
