import Image from "next/image";
import { BsBookmarkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between px-5  my-5 md:mx-20  ">
      <button className="bg-primary text-black   rounded-md px-4 py-2 font-medium text-base hover:bg-accent transition-all">
        ثبت آگهی
      </button>
      <button className="md:flex justify-center items-center gap-2 hidden  font-semibold text-secendery cursor-pointer ">
        <p>حساب کاربری</p> <FaUserAlt className="text-[20px]" />
      </button>
      <button className="md:flex hidden justify-center items-center gap-2 font-semibold text-secendery cursor-pointer">
        <p>آگهی های نشان شده</p> <BsBookmarkFill className="text-[20px]" />
      </button>
      <button className="bg-secendery text-black   rounded-md px-4 py-2 font-medium text-base hover:bg-primary transition-all">
        سایت ثبت اگهی
      </button>
    </header>
  );
}

export default Header;
