import React from "react";
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
      <header className="flex justify-between items-center mx-4 my-6 pb-4 border-b-2 border-light-border dark:border-dark-border">
        <IoArrowForward className="text-2xl text-light-primary dark:text-dark-primary" />
        <h1 className="text-xl font-semibold text-light-text dark:text-dark-text">
          انتخاب دسته‌بندی
        </h1>
      </header>
      <section className="mb-[100px]">
        <div className="flex flex-col gap-2 px-2">
          {category?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl text-light-primary dark:text-dark-primary">
                  {item.icon}
                </div>
                <h1 className="text-lg font-medium text-light-text dark:text-dark-text">
                  {item.title}
                </h1>
              </div>
              <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MobileCategoriPage;
