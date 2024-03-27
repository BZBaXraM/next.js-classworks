"use client";

import { useState } from "react";
import { reviews } from "../../../../lib/reviews";

interface Props {
  params: {
    productId: string;
    reviewId: number;
  };
}

export default function ReviewDetail({ params }: Props) {
  const [productId, reviewId] = params;
  const [title, setTitle] = useState<string>("");

  const review = reviews.find((review) => review.id === Number(reviewId));

  const onSubmit = async () => {
    await fetch(`/api/products/${productId}/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
  };

  return (
    <div>
      <h1>Review Detail Page</h1>
      <h2>product id: {productId}</h2>
      <h2>review id: {reviewId}</h2>
      <p>{review?.name}</p>
      <p>{review?.body}</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
