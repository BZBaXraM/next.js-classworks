"use client";

import { useState } from "react";

interface PageProps {
    params: {
        productId: string;
        reviewsId: string;
    };
}

export default function ReviewDetails({ params }: PageProps) {
    const { productId, reviewsId } = params;
    const [title, setTitle] = useState<string>("");

    const onSubmit = async () => {
        const res = await fetch(`/products/${productId}/reviews/${reviewsId}/api`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });
        const newReview = await res.json();
        console.log(newReview);
    };
    return (
        <div>
            <h1>Review Details</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}
