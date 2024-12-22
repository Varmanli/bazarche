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

function page() {
  return (
    <div>
      <header className="flex  justify-end items-center gap-4 mx-4 my-6 border-b-2 border-accent pb-4 ">
        <h1 className="text-lg">ثبت آگهی</h1>
        <IoArrowForward className="text-xl text-secendery" />
      </header>
      <form className="flex flex-col gap-4 justify-center items-center mb-[100px] m-5 ">
        <Select>
          <SelectTrigger>
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
          <SelectTrigger>
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
        <Label htmlFor="picture">عکس محصول را انتخاب کنید</Label>
        <Input id="picture" type="file" />
        <Input type="text" id="price" placeholder="قیمت را وارد کنید" />
        <Input type="text" id="title" placeholder="عنوان را وارد کنید" />
        <Textarea placeholder="توضیحات محصول را بنویسید" id="caption" />
        <button className="bg-primary w-full rounded-lg py-2">
          ثبت آگهی
        </button>
      </form>
    </div>
  );
}

export default page;
