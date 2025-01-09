import React from 'react';

type Props = {
  heading: string;
  span: string;
  paragraph: string;
};

function RoadmapCard({ heading, paragraph, span }: Props) {
  return (
    <div className="rounded-xl bg-[#4e7dd3]/10 backdrop-blur-sm p-6 h-[160px]  w-[250px] text-sm relative">
      <img
        className="w-40 h-16 bg-cover absolute -top-[21%] left-[15%]"
        src="/desktop/Lens_Flare_purple_PNG.png"
        alt=""
      />
      <div className="space-y-4 w-[170px] 2xl:text-[15px]">
        <h1 className="tracking-[2.7px]">
          {heading} <span className="text-[#4e7dd3]">{span}</span>
        </h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default RoadmapCard;
