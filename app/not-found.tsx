"use client";

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-8xl font-extrabold text-light-primary dark:text-dark-primary mb-5 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-4">صفحه مورد نظر یافت نشد</h2>
      <p className="text-md text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
        متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است. لطفاً دوباره تلاش کنید یا به صفحه اصلی بازگردید.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-light-primary text-white px-6 py-3 rounded-lg hover:bg-light-secondary transition-all shadow-md"
      >
        <IoArrowBack size={20} /> بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFoundPage;
