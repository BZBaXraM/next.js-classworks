export type Product = {
  id: string;
  name: string;
  price: number;
};

interface Props {
  products: Product[];
}

const ProductPage = ({ products }: Props) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
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
