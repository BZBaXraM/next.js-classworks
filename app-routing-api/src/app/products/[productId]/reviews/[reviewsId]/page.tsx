"use client";

import { useState } from "react";
import { reviews } from "../../../../../../lib/reviews";

interface PageProps {
    params: {
        productId: string;
        reviewsId: number;
    };
}

export default function ReviewDetails({ params }: PageProps) {
    const { productId, reviewsId } = params;
    const [title, setTitle] = useState<string>("");

    const review = reviews.find((review) => review.id === Number(reviewsId));

    const onSubmit = async () => {
        const response = await fetch(
            `/products/${params.productId}/reviews/${reviewsId}/api`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            }
        );
        console.log("response", response);
    };
    return (
        <div>
            <h1>Review Details</h1>
            <h2>Product id - {productId}</h2>
            <h2>Review id - {reviewsId}</h2>
            <p>{review?.name}</p>
            <p>{review?.title}</p>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}
