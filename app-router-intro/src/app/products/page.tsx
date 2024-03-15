import Link from "next/link";
import { products } from "../../../lib/data";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <h3>
                {product.id}: {product.name}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
