function Home() {

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
          href="#games"
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
