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
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 my-3 p-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg border-light-border dark:border-dark-border shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {item.title}
              </h3>
              <p className="text-primary dark:text-light-primary mt-2 font-medium">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutProduct;
