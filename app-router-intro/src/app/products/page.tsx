import Link from "next/link";
import { products } from "../../../lib/data";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(({ id, name }) => (
          <Link key={id} href={`/products/${id}`}>
            <li>
              <h3>
                {id}: {name}
              </h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;
