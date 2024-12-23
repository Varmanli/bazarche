"use client";

import { useTheme } from "../Context/ThemContext";
import { useState } from "react";
import { FaCar, FaMobileAlt, FaLaptop, FaTshirt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdOutlineSportsTennis, MdCategory } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";

const categories = [
  { title: "خودرو", icon: <FaCar /> },
  { title: "موبایل", icon: <FaMobileAlt /> },
  { title: "مبلمان", icon: <GiSofa /> },
  { title: "تلوزیون", icon: <IoTv /> },
  { title: "لپتاپ", icon: <FaLaptop /> },
  { title: "لوازم خانگی", icon: <CgSmartHomeRefrigerator /> },
  { title: "لوازم ورزشی", icon: <MdOutlineSportsTennis /> },
  { title: "پوشاک", icon: <FaTshirt /> },
];

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="w-full bg-light-background dark:bg-dark-background shadow-md border-b border-light-border dark:border-dark-border">
      {/* Main Header Section */}
      <div className="hidden md:flex justify-between items-center py-3 px-6 w-full max-w-[1440px] mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-12 h-12 bg-light-primary dark:bg-dark-primary flex items-center justify-center rounded-full">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h1 className="text-lg md:text-xl font-bold text-light-text dark:text-dark-text">
                بازارچه
              </h1>
            </div>
          </Link>
          {/* Categories Button */}
          <div className="relative">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text font-medium rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-sm md:text-base"
            >
              <MdCategory className="text-xl" />
              <span>دسته‌بندی‌ها</span>
            </button>
            {isMegaMenuOpen && (
              <div className="absolute  z-30 right-0 top-full bg-light-background dark:bg-dark-background shadow-lg mt-2 rounded-lg w-[700px] py-4 grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex  items-center justify-center gap-2 hover:bg-light-border dark:hover:bg-dark-border rounded-lg p-4 transition-all cursor-pointer"
                  >
                    <span className="text-2xl text-light-primary dark:text-dark-primary">
                      {category.icon}
                    </span>
                    <span className="text-sm md:text-base text-light-text dark:text-dark-text font-medium">
                      {category.title}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar Section */}
        <form className="flex items-center w-full max-w-3xl bg-light-border dark:bg-dark-border rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="جستجو در بازارچه..."
            className="flex-grow px-5 py-3 text-light-text  bg-transparent focus:outline-none text-sm md:text-base"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-light-primary dark:bg-dark-primary text-white font-medium hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-sm md:text-base"
          >
            جستجو
          </button>
        </form>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/notic">
            <button className="flex items-center gap-2 px-4 py-2 bg-light-accent dark:bg-dark-accent text-white font-medium rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all">
              <RiAdvertisementLine className="text-lg" />
              <span>ثبت آگهی</span>
            </button>
          </Link>
          <Link href="/account">
            <button className="p-3 bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text font-medium rounded-full hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-xl">
              <AiOutlineUser className="text-3xl" />
            </button>
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-3 bg-light-border dark:bg-dark-border text-light-text dark:text-dark-text font-medium rounded-full hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-xl"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Header Section */}
      <div className="flex md:hidden justify-center items-center py-3 px-4 w-full">
        <form className="flex items-center w-full bg-light-border dark:bg-dark-border rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="جستجو در بازارچه..."
            className="flex-grow px-5 py-3 text-light-text dark:text-dark-text bg-transparent focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-light-primary dark:bg-dark-primary text-white font-medium hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-sm"
          >
            جستجو
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
