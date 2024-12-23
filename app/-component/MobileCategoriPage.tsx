import React from "react";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaCar, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoArrowForward, IoChevronBackOutline, IoTv } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";

type CategoryItem = {
  id: string;
  title: string;
  icon: React.ReactElement;
};

type Typecategory = CategoryItem[];

const category: Typecategory = [
  { id: "1", title: "خودرو", icon: <FaCar /> },
  { id: "2", title: "موبایل", icon: <FaMobileAlt /> },
  { id: "3", title: "مبلمان", icon: <GiSofa /> },
  { id: "4", title: "تلوزیون", icon: <IoTv /> },
  { id: "5", title: "لپتاپ", icon: <FaLaptop /> },
  { id: "6", title: "لوازم خانگی", icon: <CgSmartHomeRefrigerator /> },
  { id: "7", title: "لوازم ورزشی", icon: <MdOutlineSportsTennis /> },
  { id: "8", title: "پوشاک", icon: <FaTshirt /> },
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
          {category?.map((item) => (
            <div
              key={item.id}
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
