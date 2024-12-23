import Image from "next/image";

function LayoutProduct() {
  const products = [
    {
      id: 1,
      image: "/images/goshi.jpg",
      price: "2,500,000 تومان",
      title: "گوشی موبایل سامسونگ",
    },
    {
      id: 2,
      image: "/images/iphone13.png",
      price: "3,200,000 تومان",
      title: "گوشی موبایل اپل",
    },
    {
      id: 3,
      image: "/images/goshi2.jpg",
      price: "1,800,000 تومان",
      title: "گوشی موبایل شیائومی",
    },
    {
      id: 4,
      image: "/images/mobile.jpg",
      price: "4,500,000 تومان",
      title: "گوشی موبایل هواوی",
    },
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-[#e5e7eb] dark:border-[#374151] rounded-lg p-4 bg-white dark:bg-[#1f2937] shadow-md hover:shadow-lg hover:bg-[#f9fafb] dark:hover:bg-[#111827] transition-all"
          >
            <div className="ml-4 flex flex-col justify-around gap-3">
              <h3 className="text-lg font-semibold text-[#111827] dark:text-[#f3f4f6] mb-1">
                {item.title}
              </h3>
              <p className="text-md font-bold text-[#2563eb] dark:text-[#93c5fd]">
                {item.price}
              </p>
            </div>
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutProduct;