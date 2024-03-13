import { Product } from "@/types";
import { useRouter } from "next/router";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  const { id, name, price, description } = product;
  return (
    <div>
      <h2>
        {id} - {name} - {price}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const {
    params: { productId },
  } = context;
  const res = await fetch(`http://localhost:4000/products/${productId}`);
  if (!res.ok) {
    return new Error("An error occurred while fetching the data.");
  }

  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }, { params: { productId: "2" } }],
    fallback: true,
  };
}
