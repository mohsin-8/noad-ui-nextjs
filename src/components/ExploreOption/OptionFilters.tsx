import React from "react";
import Image from "next/image";
import arrowImage from "/public/images/arrow.png";
import calenderImage from "/public/images/calendar.png";

const OptionFilters = () => {
  return (
    <>
      <div className="flex xl:flex lg:flex md:block ml:block mm:block sm:block items-end gap-4 p-[20px] bg-[#E6F3F3] lg:w-[980px] rounded-[20px]">
        <div>
          <p
            className="
            text-[#004446]
            font-semibold
            text-[14px]
            mb-[5px]
        "
          >
            Where do you want to go
          </p>
          <input
            type="search"
            className="block xl:w-[329px] lg:w-[329px] md:w-[100%] ml:w-[100%] mm:w-[100%] sm:w-[100%] h-[46px] p-[12px] text-sm text-gray-900 border border-[#00878A] rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00878A] dark:focus:border-[#00878A]"
            placeholder="Search destinations"
            required
          />
        </div>

        <div className="md:mt-[20px] ml:mt-[20px] mm:mt-[20px] sm:mt-[20px]">
          <p
            className="
            text-[#004446]
            font-semibold
            text-[14px]
            mb-[5px]
        "
          >
            Select dates
          </p>

          <button className="text-[#00888B] flex items-center justify-center xl:w-[329px] lg:w-[329px] md:w-[100%] ml:w-[100%] mm:w-[100%] sm:w-[100%] h-[46px] rounded-lg p-[12px] gap-3 border border-[#00888B]">
            <Image src={calenderImage} alt="arrow" />
            17 May 2023 <Image src={arrowImage} alt="arrow" />
            23 May 2023
          </button>
        </div>

        <div>
          <button className="bg-[#00888B] rounded-[12px] text-[#fff] xl:w-[259px] lg:w-[259px] md:w-[100%] ml:w-[100%] mm:w-[100%] sm:w-[100%] h-[46px] mb-[none] md:mt-[20px] ml:mt-[20px] mm:mt-[20px] sm:mt-[20px]">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default OptionFilters;
