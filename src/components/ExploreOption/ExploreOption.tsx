import React from "react";
import OptionFilters from "./OptionFilters";

const ExploreOption = () => {
  return (
    <div
      className="
      xl:mt-[0]
      lg:mt-[0]
      md:mt-[25px]
      ml:mt-[25px]
      mm:mt-[25px]
      sm:mt-[25px]
      max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-12 overflow-x-hidden
      "
    >
      <h1 className="text-[24px] font-normal text-[#000000] mb-[25px]">
        Explore Options
      </h1>

      <OptionFilters />
    </div>
  );
};

export default ExploreOption;
