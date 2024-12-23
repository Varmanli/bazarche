import Image from "next/image";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

type ComponentProps = {
  title: string;
  image: string;
  price: number;
};

function Product({ title, image, price }: ComponentProps) {
  return (
    <div className="flex flex-col justify-between items-center m-4 border border-light-border dark:border-dark-border rounded-lg cursor-pointer bg-light-background dark:bg-dark-background hover:shadow-lg transition-shadow duration-300">
      <div className="w-full">
        <Image
          className="object-cover rounded-t-lg"
          src={image}
          alt={title}
          width={500}
          height={300}
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-around gap-2 p-4 w-full text-center">
        <h2 className="text-base font-medium text-light-text dark:text-dark-text truncate">
          {title}
        </h2>
        <div className="flex justify-center items-center gap-1 text-light-text dark:text-dark-text">
          <span className="text-lg font-semibold">{numberWithCommas(price)}</span>
          <span className="text-sm">تومان</span>
        </div>
        <button className="mt-4 px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:bg-light-secondary dark:hover:bg-dark-secondary transition-all text-sm">
          مشاهده محصول
        </button>
      </div>
    </div>
  );
}

export default Product;
