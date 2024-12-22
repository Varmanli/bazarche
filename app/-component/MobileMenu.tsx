"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaListUl, FaNewspaper, FaUserAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

function MobileMenu() {
  const pathname: string = usePathname();

  return (
    <div className="text-[#9F9F9F] flex px-5 py-3 flex-row-reverse justify-between md:hidden items-center bg-[#fff] fixed bottom-0 right-0 left-0 z-40 ">
      <Link
        href={"/"}
        className={`flex flex-col justify-between items-center text-secendery hover:text-primary cursor-pointer gap-2`}
      >
        <FaNewspaper className="text-[25px]" />
        <h2 className="text-sm">آگهی ها</h2>
      </Link>
      <Link
        href={"/category"}
        className="flex flex-col justify-between items-center text-secendery hover:text-primary cursor-pointer gap-2"
      >
        <FaListUl className="text-[22px]" />
        <h2 className="text-sm">دسته ها</h2>
      </Link>
      <Link
        href={"/notic"}
        className="flex flex-col justify-between items-center text-secendery hover:text-primary cursor-pointer gap-2"
      >
        <IoIosAddCircle className="text-[25px]" />
        <h2 className="text-sm">ثبت آگهی</h2>
      </Link>
      <Link
        href={"/account"}
        className="flex flex-col justify-between items-center text-secendery hover:text-primary cursor-pointer gap-2"
      >
        <FaUserAlt className="text-[22px]" />
        <h2 className="text-sm ">حساب</h2>
      </Link>
    </div>
  );
}

export default MobileMenu;
