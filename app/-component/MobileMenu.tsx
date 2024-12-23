"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListUl, FaNewspaper, FaUserAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

function MobileMenu() {
  const pathname: string = usePathname();

  return (
    <div className="flex px-5 py-3 justify-between md:hidden items-center bg-light-background dark:bg-dark-background fixed bottom-0 right-0 left-0 z-40 shadow-md">
      <Link
        href="/"
        className={`flex flex-col justify-between items-center ${
          pathname === "/"
            ? "text-light-primary dark:text-dark-primary"
            : "text-light-text dark:text-dark-text"
        } hover:text-light-primary dark:hover:text-dark-primary cursor-pointer gap-1`}
      >
        <FaNewspaper className="text-[25px]" />
        <h2 className="text-xs">آگهی ها</h2>
      </Link>
      <Link
        href="/notic"
        className={`flex flex-col justify-between items-center ${
          pathname === "/notic"
            ? "text-light-primary dark:text-dark-primary"
            : "text-light-text dark:text-dark-text"
        } hover:text-light-primary dark:hover:text-dark-primary cursor-pointer gap-1`}
      >
        <IoIosAddCircle className="text-[25px]" />
        <h2 className="text-xs">ثبت آگهی</h2>
      </Link>
      <Link
        href="/category"
        className={`flex flex-col justify-between items-center ${
          pathname === "/category"
            ? "text-light-primary dark:text-dark-primary"
            : "text-light-text dark:text-dark-text"
        } hover:text-light-primary dark:hover:text-dark-primary cursor-pointer gap-1`}
      >
        <FaListUl className="text-[22px]" />
        <h2 className="text-xs">دسته ها</h2>
      </Link>
      <Link
        href="/account"
        className={`flex flex-col justify-between items-center ${
          pathname === "/account"
            ? "text-light-primary dark:text-dark-primary"
            : "text-light-text dark:text-dark-text"
        } hover:text-light-primary dark:hover:text-dark-primary cursor-pointer gap-1`}
      >
        <FaUserAlt className="text-[22px]" />
        <h2 className="text-xs">حساب</h2>
      </Link>
    </div>
  );
}

export default MobileMenu;
