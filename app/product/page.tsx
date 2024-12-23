import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { IoArrowForward, IoShareSocial } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";

function page() {
  return (
    <div className="text-right mb-10 px-4">
      {/* Main Section */}
      <section className="grid md:grid-cols-3 gap-6 bg-light-background dark:bg-dark-background rounded-lg shadow-lg p-6">
        {/* Image Gallery Section */}
        <div className="md:col-span-1 flex flex-col items-center gap-4">
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://dqcxviiyjskhxkupelvr.supabase.co/storage/v1/object/public/product/iphone13.png"
              alt="Product Image"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 overflow-hidden rounded-lg border border-light-border dark:border-dark-border cursor-pointer hover:opacity-80"
              >
                <Image
                  src="https://dqcxviiyjskhxkupelvr.supabase.co/storage/v1/object/public/product/iphone13.png"
                  alt={`Gallery Image ${index + 1}`}
                  layout="responsive"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
            اپل iPhone 11 Pro Max ۶۴ گیگابایت
          </h2>

          {/* Info Section */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between border-b border-light-border dark:border-dark-border pb-2">
              <span className="text-sm text-gray-500">شهر</span>
              <span className="text-base font-medium text-light-text dark:text-dark-text">
                تهران
              </span>
            </div>
            <div className="flex justify-between border-b border-light-border dark:border-dark-border pb-2">
              <span className="text-sm text-gray-500">دسته‌بندی</span>
              <span className="text-base font-medium text-light-text dark:text-dark-text">
                موبایل
              </span>
            </div>
            <div className="flex justify-between border-b border-light-border dark:border-dark-border pb-2">
              <span className="text-sm text-gray-500">قیمت</span>
              <span className="text-base font-semibold text-light-primary dark:text-dark-primary">
                35,000,000 تومان
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-4">
            <h2 className="mb-2 font-bold text-lg text-light-text dark:text-dark-text">
              توضیحات
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              سالم و تمیز همه چیزاش برا سر هم کردنش هست قیمت کم گزاشتم سر اینکه
              خوردم بی پولی ردش کنم بره
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex md:gap-4 mt-4 mb-10 items-center md:justify-between">
            <button className="flex-1 bg-light-primary text-white py-3 rounded-lg shadow-md hover:bg-light-secondary transition-all flex items-center justify-center gap-2 text-sm md:text-base md:gap-3">
              <MdPhoneInTalk className="text-lg md:text-xl" /> تماس با فروشنده
            </button>
            <button className="md:flex-1 mx-4 md:mx-0 md:border border-light-primary text-light-primary md:py-3 md:rounded-lg md:shadow-md md:hover:bg-light-primary hover:text-[#fff] transition-all flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
              <FaRegBookmark className="text-xl md:text-xl" />
              <span className="hidden md:inline">نشان کردن</span>
            </button>
            <button className="md:flex-1 md:border border-light-secondary text-light-secondary md:py-3 md:rounded-lg md:shadow-md md:hover:bg-light-secondary hover:text-[#fff]  transition-all flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
              <IoShareSocial className="text-xl md:text-xl" />
              <span className="hidden md:inline">اشتراک‌گذاری</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
