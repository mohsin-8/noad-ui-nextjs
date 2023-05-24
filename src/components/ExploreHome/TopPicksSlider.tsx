import React from "react";
import Image from "next/image";
import { cardsData } from "@/data/data";

type CardsDataType = {
  image: string;
  location: string;
  title: string;
  description: string;
  bedImg: string;
  bedQuantity: string;
  tableImg: string;
  tableQuantity: string;
  showerImg: string;
  showerQuantity: string;
};

const TopPicksSlider = () => {
  return (
    <div className="grid grid-cols-9 gap-[25.25rem] overflow-x-scroll cardscroll">
      {cardsData.map((item: CardsDataType, index: number) => (
        <div key={index}>
          <div className="w-[382px]">
            <Image
              className="rounded-t-[12px] w-[382px]"
              src={item.image}
              alt="cardImage"
              width={700}
              height={700}
            />
          </div>

          <div className="w-[382px] rounded-b-[12px] py-[12px] px-[16px] bg-[#E6F3F3]">
            <p className="text-[#00878A] font-medium text-[12px]">
              {item.location}
            </p>

            <h5 className="text-[#004446] font-[600] mt-[12px] text-[18px]">
              {item.title}
            </h5>

            <p className="text-[#00878A] font-medium text-[16px] w-[347px]">
              {item.description}
            </p>

            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center mt-[8px] gap-2">
                <Image
                  width={100}
                  height={100}
                  src={item.bedImg}
                  alt="bed"
                  className="w-[20px]"
                />
                <p className="text-[14px] font-[500] text-[#004446]">
                  {item.bedQuantity}
                </p>
              </div>

              <div className="flex items-center mt-[8px] gap-2">
                <Image
                  width={100}
                  height={100}
                  src={item.tableImg}
                  alt="TableImg"
                  className="w-[20px]"
                />
                <p className="text-[14px] font-[500] text-[#004446]">
                  {item.tableQuantity}
                </p>
              </div>

              <div className="flex items-center mt-[8px] gap-2">
                <Image
                  width={100}
                  height={100}
                  src={item.showerImg}
                  alt="ShowerImg"
                  className="w-[20px]"
                />
                <p className="text-[14px] font-[500] text-[#004446]">
                  {item.showerQuantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPicksSlider;
