"use client";
import { notFound, useRouter } from "next/navigation";
import { products } from "../../../../lib/data";

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: Props) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const findId = products.find(
    (product) => product.id === Number(params.productId)
  );
  console.log("findId", findId);
  if (!findId) {
    return notFound();
  }

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h1>Product Details</h1>
      <h2></h2>
      <h2>
        {findId.id}: {findId.name}
      </h2>
      <p>{findId.body}</p>
    </div>
  );
}
