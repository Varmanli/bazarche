import { FaRegBookmark } from "react-icons/fa";
import { IoArrowForward, IoChevronBackOutline } from "react-icons/io5";
import { RiLogoutCircleLine, RiLogoutCircleRLine } from "react-icons/ri";

function page() {
  return (
    <div>
      <header className="flex justify-end items-center gap-4 mx-4 my-6 border-b-2 border-accent  pb-4 ">
        <h1 className="text-base">حساب کاربری</h1>
        <IoArrowForward className="text-xl text-secendery" />
      </header>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex justify-between items-center m-3 border-b-2 border-accent pb-3">
          <IoChevronBackOutline className="text-xl text-secendery" />
          <div className="flex items-center justify-center gap-3">
            <h3>ورود به حساب</h3>
            <RiLogoutCircleRLine className="text-xl mt-1 text-secendery" />
          </div>
        </div>
        <div className="flex justify-between items-center m-3 border-b-2 border-accent pb-3">
          <IoChevronBackOutline className="text-xl text-secendery" />
          <div className="flex items-center justify-center gap-3">
            <h3>آگهی های نشان شده</h3>
            <FaRegBookmark className="text-xl mt-1 text-secendery" />
          </div>
        </div>
        <div className="flex justify-between items-center m-3 border-b-2 border-accent pb-3">
          <IoChevronBackOutline className="text-xl text-secendery" />
          <div className="flex items-center justify-center gap-3">
            <h3>خروج از حساب</h3>
            <RiLogoutCircleLine className="text-xl mt-1 text-secendery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
