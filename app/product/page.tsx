import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Header from "../-component/Header";

function page() {
  return (
    <div className="text-right mb-[100px]">
      <div className="hidden md:block">
        <Header />
      </div>
      <header className="flex justify-between md:hidden items-center  border-b-2 border-accent p-5">
        <button>
          <FaRegBookmark className="text-[26px] text-secendery" />
        </button>
        <button>
          <IoArrowForward className="text-[26px] text-secendery" />
        </button>
      </header>
      <section className="flex flex-col justify-center md:flex-row">
        <div>
          <Image
            src="https://dqcxviiyjskhxkupelvr.supabase.co/storage/v1/object/public/product/iphone13.png"
            alt="image"
            height="300"
            width="300"
            className="m-auto"
          />
        </div>
        <div>
          <div className="p-4">
            <h2 className="text-[21px]">اپل iPhone 11 Pro Max ۶۴ گیگابایت</h2>
          </div>
          <div className="felx flex-col items-center">
            <div className="flex justify-between m-3 border-b-2 border-accent pb-2">
              <h2>تهران</h2>
              <h2 className="text-[#9F9F9F]">شهر</h2>
            </div>
            <div className="flex justify-between m-3 border-b-2 border-accent pb-2">
              <h2>موبایل</h2>
              <h2 className="text-[#9F9F9F]">دسته بندی</h2>
            </div>
            <div className="flex justify-between m-3 border-b-2 border-accent pb-2">
              <h2 className="flex gap-3 justify-center items-center">
                <span>تومان</span> 35,000,000
              </h2>
              <h2 className="text-[#9F9F9F]">قیمت</h2>
            </div>
          </div>
          <div className="m-3">
            <h2 className="my-4 font-bold text-lg">توضیحات</h2>
            <p>
              سالم و تمیز همه چیزاش برا سر هم کردنش هست قیمت کم گزاشتم سر اینکه
              خوردم بی پولی ردش کنم بره
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
