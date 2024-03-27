"use client";

import { Review } from "@/types";
import { useState } from "react";

export default function Reviews({ params }: any) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [input, setInput] = useState("");

    const submitReview = async () => {
        const res = await fetch(`/products/${params.productId}/reviews/api`, {
            method: "POST",
            body: JSON.stringify({ body: input }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const newReview = await res.json();
        setReviews([...reviews, newReview]);
    };

    return (
        <div>
            <h1>Reviews</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={submitReview}>Add Review</button>
        </div>
    );
}