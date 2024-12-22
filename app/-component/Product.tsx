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
    <div className="flex justify-between text-right items-center m-3 border-b-2 border-accent md:border-2 md:rounded-lg cursor-pointer  ">
      <div className="p-4">
        <Image
          className="object-contain w-[136px] h-[136px] rounded-lg "
          src={image}
          alt={title}
          width="134"
          height="134"
        />
      </div>
      <div className="flex flex-col justify-around gap-4 p-4 ">
        <h2 className="text-lg text-white/90">{title}</h2>
        <h3 className="text-white/50 flex gap-2 items-center justify-start flex-row-reverse">
          <span>{numberWithCommas(price)}</span>
          <span>تومان</span>
        </h3>
      </div>
    </div>
  );
}

export default Product;
