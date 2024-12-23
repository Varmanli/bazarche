import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaCar, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";

type CategoryItem = {
  id: string;
  title: string;
  icon: React.ReactElement;
};

type Typecategory = CategoryItem[];

const category: Typecategory = [
  { id: "1", title: "خودرو", icon: <FaCar /> },
  { id: "2", title: "موبایل", icon: <FaMobileAlt /> },
  { id: "3", title: "مبلمان", icon: <GiSofa /> },
  { id: "4", title: "تلوزیون", icon: <IoTv /> },
  { id: "5", title: "لپتاپ", icon: <FaLaptop /> },
  { id: "6", title: "لوازم خانگی", icon: <CgSmartHomeRefrigerator /> },
  { id: "7", title: "لوازم ورزشی", icon: <MdOutlineSportsTennis /> },
  { id: "8", title: "پوشاک", icon: <FaTshirt /> },
];

function CategoryMobile() {
  return (
    <div className="grid grid-cols-4 gap-2 md:grid-cols-8 justify-around items-center  text-secendery border-y-2 border-accent  py-4 ">
      {category?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center gap-3 hover:text-primary cursor-pointer transition-all duration-500"
        >
          <div className="text-[38px]">{item.icon}</div>
          <h3 className="text-lg">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default CategoryMobile;
