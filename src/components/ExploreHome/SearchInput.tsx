import React from "react";

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#00878A] dark:text-[#00878A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        className="block xl:w-[416px] lg:w-[416px] md:w-[416px] ml:w-[100%] mm:w-[100%] sm:w-[100%] h-[46px] p-4 pl-10 text-sm text-gray-900 border border-[#00878A] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00878A] dark:focus:border-[#00878A]"
        placeholder="Search"
        required
      />
    </div>
  );
};

export default SearchInput;
