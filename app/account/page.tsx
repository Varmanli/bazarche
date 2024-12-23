import { FaRegBookmark, FaRegAddressBook } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import {
  RiLogoutCircleLine,
  RiLogoutCircleRLine,
  RiAdvertisementLine,
} from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";

function page() {
  return (
    <div className="w-full pt-5 bg-light-background dark:bg-dark-background min-h-screen">
      <div className="flex flex-col justify-center gap-4 px-4 md:px-8 lg:w-2/3 lg:mx-auto">
        {/* Login Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <RiLogoutCircleRLine className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              ورود به حساب
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>

        {/* My Ads Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <RiAdvertisementLine className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              آگهی‌های من
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>

        {/* Add New Ad Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <MdOutlinePostAdd className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              افزودن آگهی جدید
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>

        {/* Saved Ads Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <FaRegBookmark className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              آگهی‌های نشان شده
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>

        {/* Contact Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <FaRegAddressBook className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              اطلاعات تماس
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>

        {/* Logout Section */}
        <div className="flex flex-row justify-between items-center px-4 py-3 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-background hover:shadow-md transition-all cursor-pointer">
          <div className="flex items-center gap-3">
            <RiLogoutCircleLine className="text-2xl text-light-primary dark:text-dark-primary" />
            <h3 className="text-base md:text-lg font-medium text-light-text dark:text-dark-text">
              خروج از حساب
            </h3>
          </div>
          <IoChevronBackOutline className="text-xl text-light-primary dark:text-dark-primary" />
        </div>
      </div>
    </div>
  );
}

export default page;
