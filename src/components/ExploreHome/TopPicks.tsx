import React from "react";
import TopPicksSlider from "./TopPicksSlider";

const TopPicks = () => {
  return (
    <>
      <div className="pt-[50px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="xl:text-[24px] lg:text-[24px] md:text-[24px] ml:text-[22px] mm:text-[20px] sm:text-[18px] font-normal text-[#000]">
          Top Picks For You - <span className="text-[#004446]">Amsterdam</span>
        </h1>
      </div>

      <div className="mt-[25px] pl-[69px] xl:pl-[115px] lg:pl-[65px] md:pl-[25px] ml:pl-[25px] mm:pl-[25px] sm:pl-[25px]">
        <TopPicksSlider />
      </div>
    </>
  );
};

export default TopPicks;
