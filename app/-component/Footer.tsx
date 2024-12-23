import { FaInstagram, FaTelegram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light-background dark:bg-dark-background py-10 border-t border-light-border dark:border-dark-border mt-10 w-full">
      <div className="w-full px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
        {/* About Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
            درباره بازارچه
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            بازارچه، پلتفرمی برای خرید و فروش آنلاین کالاهاست. هدف ما فراهم کردن تجربه‌ای ساده، سریع و ایمن برای کاربران است.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
            لینک‌های سریع
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                درباره ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                تماس با ما
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
              >
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
            ما را دنبال کنید
          </h3>
          <div className="flex gap-4 justify-start">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <FaTelegram className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col justify-start">
          <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">
            تماس با ما
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            ایمیل: info@bazaarche.com
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            تلفن: 021-12345678
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t mb-10 md:mb-0 border-light-border dark:border-dark-border mt-8 pt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 بازارچه. تمامی حقوق محفوظ است. طراحی و توسعه توسط
          <a
            href="https://varmanli.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-primary dark:text-dark-primary hover:underline ml-1"
          >
            امیرحسین ورمانلی
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
