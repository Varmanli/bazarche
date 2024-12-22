import React, { ElementType, ReactElement } from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaCar, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoArrowForward, IoChevronBackOutline, IoTv } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";

type Typecategory = [
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement }
];

const category: Typecategory = [
  { title: "خودرو", icon: <FaCar /> },
  { title: "موبایل", icon: <FaMobileAlt /> },
  { title: "مبلمان", icon: <GiSofa /> },
  { title: "تلوزیون", icon: <IoTv /> },
  { title: "لپتاپ", icon: <FaLaptop /> },
  { title: "لوازم خانگی", icon: <CgSmartHomeRefrigerator /> },
  { title: "لوازم ورزشی", icon: <MdOutlineSportsTennis /> },
  { title: "پوشاک", icon: <FaTshirt /> },
];

function MobileCategoriPage() {
  return (
    <>
      <header className="flex justify-end items-center gap-4 mx-4 my-6 border-b-2 border-accent  pb-4 ">
        <h1 className="text-lg">انتخاب دسته بندی</h1>
        <IoArrowForward className="text-xl text-secendery" />
      </header>
      <section className="mb-[100px]">
        <div>
          {category?.map((item) => (
            <div className="flex justify-between items-center gap-3 text-lg border-b-2 border-accent p-4 cursor-pointer">
              <IoChevronBackOutline className="text-xl text-secendery" />
              <div className="flex items-center gap-4">
                <h1>{item.title}</h1>
                <div className="text-xl text-secendery">
                  <>{item.icon}</>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MobileCategoriPage;
