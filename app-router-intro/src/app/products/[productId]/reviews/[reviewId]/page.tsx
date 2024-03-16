interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ReviewDetail({ params }: Props) {
  const { productId, reviewId } = params;
  console.log("params", params);
  return (
    <div>
      <h1>Review Detail Page</h1>
      <h2> product id - {productId}</h2>
      <h2> review id - {reviewId}</h2>
    </div>
  );
}
