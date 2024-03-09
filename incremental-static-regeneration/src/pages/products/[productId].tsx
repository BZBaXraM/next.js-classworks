import { Product } from ".";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div>
      <div key={product.id}>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export async function getStaticProps(context: any) {
  console.log(context);
  const {
    params: { productId },
  } = context;
  const res = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await res.json();

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
