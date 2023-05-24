import React, { useState } from "react";
import Image from "next/image";
import filterImage from "/public/images/filters.png";
const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e: any) => {
    e.stopPropagation(); // Stop the event from reaching the button
  };

  const [bedQuantity, setBedQuantity] = useState(1);
  const [tableQuantity, setTableQuantity] = useState(1);
  const [showerQuantity, setShowerQuantity] = useState(1);

  return (
    <>
      <div>
        <button
          onClick={toggleAccordion}
          className="flex items-center justify-center rounded-[12px] text-[16px] ml:mt-[20px] mm:mt-[20px] sm:mt-[20px] font-normal text-[#004446] gap-3 bg-[#e6f3f3] xl:w-[121px] lg:w-[121px] md:w-[121px] ml:w-[100%] mm:w-[100%] sm:w-[100%] h-[46px]"
        >
          <Image
            src={filterImage}
            className="w-[21.05px]"
            alt="filters image"
          />
          Filters
          {isOpen && (
            <div
              className="flex gap-10 text-primaryLight absolute top-[17.5rem] right-[4rem] shadow-md py-3 px-6 bg-secondaryWhite z-10"
              onClick={closePopup} // Add click event handler to the popup
            >
              <div>
                <div className="flex justify-between text-sm">
                  <label htmlFor="bedRoom">Bed Room:</label>
                  <p>{bedQuantity}</p>
                </div>
                <input
                  min="1"
                  max="10"
                  type="range"
                  value={bedQuantity}
                  onChange={(e) => setBedQuantity(parseInt(e.target.value))}
                />
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <label htmlFor="bedRoom">Table:</label>
                  <p>{tableQuantity}</p>
                </div>
                <input
                  min="1"
                  max="10"
                  type="range"
                  value={tableQuantity}
                  onChange={(e) => setTableQuantity(parseInt(e.target.value))}
                />
              </div>

              <div>
                <div className="flex justify-between text-sm">
                  <label htmlFor="bedRoom">Shower:</label>
                  <p>{showerQuantity}</p>
                </div>
                <input
                  min="1"
                  max="10"
                  type="range"
                  value={showerQuantity}
                  onChange={(e) => setShowerQuantity(parseInt(e.target.value))}
                />
              </div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default FilterButton;
