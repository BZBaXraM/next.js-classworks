import { Product } from "@/types";
import Link from "next/link";

interface Props {
  products: Product[];
}

const ProductPage = ({ products }: Props) => {
  return (
    <>
      <h1>Products</h1>
      {products.map((product) => {
        const { id, name, price } = product;
        return (
          <div key={id}>
            <Link href={`/products/${id}`}>
              <h2>
                {id} - {name} - {price}
              </h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductPage;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log("REVALIDATING... ");

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
