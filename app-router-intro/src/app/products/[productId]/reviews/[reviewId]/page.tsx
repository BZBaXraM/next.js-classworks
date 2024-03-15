interface Props {
  params: {
    productId: string;
    reviewId: string;
  };
}

export default function ReviewDetail({ params }: Props) {
  const { productId, reviewId } = params;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
