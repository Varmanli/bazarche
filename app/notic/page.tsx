"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

function Page() {
  const [images, setImages] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 6) {
      alert("حداکثر 6 تصویر مجاز است.");
      return;
    }

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target?.result && images.length < 6) {
          setImages((prevImages) => [
            ...prevImages,
            event.target!.result as string,
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "").replace(/ تومان/g, ""); // حذف جداکننده‌ها و تومان
    if (/^\d*$/.test(rawValue)) {
      setError("");
      setPrice(
        rawValue !== ""
          ? rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " تومان"
          : ""
      );
    } else {
      setError("لطفاً فقط عدد وارد کنید.");
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setTitle(value);
    } else {
      alert("عنوان نمی‌تواند بیشتر از 50 کاراکتر باشد.");
    }
  };

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setCaption(value);
    } else {
      alert("توضیحات نمی‌تواند بیشتر از 300 کاراکتر باشد.");
    }
  };

  return (
    <div className="w-full bg-light-background dark:bg-dark-background min-h-screen p-4">
      <form className="flex flex-col gap-6 max-w-3xl mx-auto">
        {/* Image Upload Section */}
        <div className="w-full">
          <Label
            htmlFor="picture"
            className="block text-lg font-semibold text-center text-light-text dark:text-dark-text mb-4"
          >
            عکس‌های محصول را انتخاب کنید
          </Label>
          <Input
            id="picture"
            type="file"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
          <div
            id="preview-container"
            className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-4"
          >
            {images.map((src, index) => (
              <div key={index} className="relative group">
                <Image
                  src={src}
                  alt={`Preview ${index + 1}`}
                  width={112}
                  height={112}
                  className={`object-cover rounded-lg shadow-md ${
                    index === 0
                      ? "border-2 border-light-primary dark:border-dark-primary"
                      : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <IoClose size={16} />
                </button>
              </div>
            ))}
            {images.length < 6 && (
              <label
                htmlFor="picture"
                className="flex items-center justify-center w-full h-28 border-2 border-dashed rounded-lg cursor-pointer hover:bg-light-primary/10 dark:hover:bg-dark-primary/10"
              >
                <span className="text-sm text-gray-500">+ افزودن تصویر</span>
              </label>
            )}
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full flex flex-col gap-6">
          <Select>
            <SelectTrigger className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary">
              <SelectValue placeholder="انتخاب دسته بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>دسته بندی خود را انتخاب کنید</SelectLabel>
                <SelectItem value="موبایل">موبایل</SelectItem>
                <SelectItem value="مبلمان">مبلمان</SelectItem>
                <SelectItem value="تلویزیون">تلویزیون</SelectItem>
                <SelectItem value="لوازم خانگی">لوازم خانگی</SelectItem>
                <SelectItem value="لوازم ورزشی">لوازم ورزشی</SelectItem>
                <SelectItem value="پوشاک">پوشاک</SelectItem>
                <SelectItem value="خودرو">خودرو</SelectItem>
                <SelectItem value="لپتاپ">لپتاپ</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary">
              <SelectValue placeholder="انتخاب شهر" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>شهر خود را انتخاب کنید</SelectLabel>
                <SelectItem value="تهران">تهران</SelectItem>
                <SelectItem value="کرج">کرج</SelectItem>
                <SelectItem value="اصفهان">اصفهان</SelectItem>
                <SelectItem value="شیراز">شیراز</SelectItem>
                <SelectItem value="مشهد">مشهد</SelectItem>
                <SelectItem value="تبریز">تبریز</SelectItem>
                <SelectItem value="مازندران">مازندران</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="w-full">
            <Input
              type="text"
              id="price"
              placeholder="قیمت را وارد کنید"
              value={price}
              onChange={handlePriceChange}
              className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <Input
            type="text"
            id="title"
            placeholder="عنوان را وارد کنید (حداکثر 50 کاراکتر)"
            value={title}
            onChange={handleTitleChange}
            className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />

          <Textarea
            placeholder="توضیحات محصول را بنویسید (حداکثر 300 کاراکتر)"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
            className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />

          <button className="bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary w-full rounded-lg py-3 text-white font-medium hover:opacity-90 transition-all shadow-lg">
            ثبت آگهی
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;
