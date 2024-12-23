import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaCar, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";

type Typecategory = [
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement },
  { title: string; icon: React.ReactElement }
];

const category: Typecategory = [
  { title: "خودرو", icon: <FaCar /> },
  { title: "موبایل", icon: <FaMobileAlt /> },
  { title: "مبلمان", icon: <GiSofa /> },
  { title: "تلوزیون", icon: <IoTv /> },
  { title: "لپتاپ", icon: <FaLaptop /> },
  { title: "لوازم خانگی", icon: <CgSmartHomeRefrigerator /> },
  { title: "لوازم ورزشی", icon: <MdOutlineSportsTennis /> },
  { title: "پوشاک", icon: <FaTshirt /> },
];

function CategoryMobile() {
  return (
    <div className="grid grid-cols-4 gap-2 md:grid-cols-8 justify-around items-center  text-secendery border-y-2 border-accent  py-4 ">
      {category?.map((item) => (
        <div className="flex flex-col justify-center items-center gap-3 hover:text-primary cursor-pointer transition-all duration-500">
          <div className="text-[38px]">{item.icon}</div>
          <h3 className="text-lg">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryMobile;
