import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";
import MobileMenu from "./-component/MobileMenu";
import { ThemeProvider } from "./Context/ThemContext";
import Header from "./-component/Header";
import Footer from "./-component/Footer";

const vazirFont = localFont({
  src: "../public/font/Vazirmatn-Regular.woff2",
});

export const metadata: Metadata = {
  title: "بازارچه | خرید و فروش آنلاین",
  description:
    "بازارچه، پلتفرم خرید و فروش آنلاین کالاها. خرید آسان، فروش سریع، و پیدا کردن بهترین پیشنهادها در دسته‌بندی‌های مختلف.",
  keywords: [
    "بازارچه",
    "خرید آنلاین",
    "فروش آنلاین",
    "کالاهای دست دوم",
    "خرید آسان",
    "فروش سریع",
    "دیوار",
    "پلتفرم خرید و فروش",
  ],
  openGraph: {
    title: "بازارچه | خرید و فروش آنلاین",
    description:
      "پلتفرم بازارچه، جایی برای خرید و فروش کالاهای شما به سریع‌ترین و آسان‌ترین روش ممکن.",
    url: "https://yourbazaarchewebsite.com",
    siteName: "بازارچه",
    images: [
      {
        url: "/public/images/og-image.jpg", // مسیر تصویر واقعی
        width: 1200,
        height: 630,
        alt: "بازارچه | خرید و فروش آنلاین",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourbazaarche",
    title: "بازارچه | خرید و فروش آنلاین",
    description:
      "پلتفرم بازارچه، جایی برای خرید و فروش کالاهای شما به سریع‌ترین و آسان‌ترین روش ممکن.",
    images: ["/public/images/og-image.jpg"], // مسیر تصویر واقعی
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="light" dir="rtl">
      <body
        className={`${vazirFont.className} bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <MobileMenu />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
