"use client";
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
import { IoArrowForward } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function page() {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (images.length + files.length > 6)
      return alert("حداکثر 6 تصویر مجاز است.");

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

  return (
    <div className="w-full bg-light-background dark:bg-dark-background min-h-screen p-2">
      <form className="flex flex-col gap-6 justify-center items-center mb-[100px] m-5 max-w-3xl mx-auto">
        <div className="w-full flex flex-col gap-4">
          <Label
            htmlFor="picture"
            className="text-md text-center font-semibold text-light-text dark:text-dark-text"
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
                <img
                  src={src}
                  alt={`Preview ${index + 1}`}
                  className={`w-full h-28 object-cover rounded-lg shadow-md ${
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

        <div className="w-full flex flex-col gap-6 mt-6">
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

          <Input
            type="text"
            id="price"
            placeholder="قیمت را وارد کنید"
            className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />

          <Input
            type="text"
            id="title"
            placeholder="عنوان را وارد کنید"
            className="w-full border border-light-border dark:border-dark-border rounded-lg px-4 py-2 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
          />

          <Textarea
            placeholder="توضیحات محصول را بنویسید"
            id="caption"
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

export default page;
