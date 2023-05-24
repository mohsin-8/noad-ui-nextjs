import React from "react";

//import search input component
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import TopPicks from "./TopPicks";
import TravelSlider from "./TravelSlider";

const ExploreHome = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 lg:py-12 xl:px-8 xl:py-12 md:px-8 md:py-12 ml:px-6 ml:py-10 mm:px-6 mm:py-10 sm:px-5 sm:py-8">
        <h1
          className="
            xl:text-[32px]
            lg:text-[32px]
            md:text-[32px]
            ml:text-[30px]
            mm:text-[30px]
            sm:text-[25px]
            font-semibold
        text-[#00878A]
        "
        >
          Explore homes
        </h1>
      </div>

      <div
        className="
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
        xl:flex
        lg:flex
        md:flex
        justify-between
        items-baseline
        "
      >
        <SearchInput />
        <FilterButton />
      </div>
      {/* top picks */}
      <TopPicks />

      {/* travel slider */}
      <TravelSlider />
    </div>
  );
};

export default ExploreHome;
