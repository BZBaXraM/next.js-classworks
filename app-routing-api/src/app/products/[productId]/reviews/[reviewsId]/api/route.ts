import { NextRequest, NextResponse } from "next/server";
import { reviews } from "../../../../../../../lib/reviews";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredReviews = query
        ? reviews.filter((review) => review.body.includes(query))
        : reviews;
    console.log(filteredReviews);

    return NextResponse.json({ filteredReviews });
}

export async function PATCH(
    req: NextRequest,
    {
        params,
    }: {
        params: {
            productId: string;
        };
    }
) {
    const review = reviews.find(
        (review) => review.id === Number(params.productId)
    );
    const body = await req.json();
    return new NextResponse(JSON.stringify(review));
}
