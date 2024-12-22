import { supabase } from "@/lib/supabase";
import Product from "./Product";

export async function getProduct() {
  let { data, error } = await supabase.from("Product").select("*");

  if (error) {
    console.error(error);
  }

  return data;
}
export async function updateProduct() {
  const { data, error } = await supabase
    .from("Product")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();
  return data;
}
async function LayoutProduct() {
  const product = await getProduct();
  console.log(product);
  return (
    <div>
      <div className="mb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {product?.map((item) => (
          <Product image={item.image} price={item.price} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default LayoutProduct;
