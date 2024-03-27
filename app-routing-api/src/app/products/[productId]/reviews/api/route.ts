import { NextResponse } from "next/server";
import { reviews } from "../../../../../../lib/reviews";
import exp from "constants";

export async function GET() {
    return NextResponse.json(reviews);
}

export async function POST(req: Request) {
    const review = await req.json();
    const newReview = {
        id: reviews.length + 1,
        ...review,
    };
    reviews.push(newReview);
    return new NextResponse(JSON.stringify(newReview));
}
