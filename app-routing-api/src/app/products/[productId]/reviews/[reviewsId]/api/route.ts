import { NextRequest, NextResponse } from "next/server";
import { reviews } from "../../../../../../../lib/reviews";

export async function GET(
    request: NextRequest,
    {
        params,
    }: {
        params: {
            productId: string;
        };
    }
) {
    const review = reviews.find((r) => r.id === Number(params.productId));
    console.log("productId", params.productId);

    return new NextResponse(JSON.stringify(review));
}
// export async function GET(req: NextRequest) {
//     const searchParams = req.nextUrl.searchParams;
//     const query = searchParams.get("query");
//     const filteredReviews = query
//         ? reviews.filter((review) => review.title.includes(query))
//         : reviews;
//     console.log(filteredReviews);

//     return NextResponse.json({ filteredReviews });
// }

export async function PATCH(
    request: NextRequest,
    {
        params,
    }: {
        params: {
            productId: string;
        };
    }
) {
    const body = await request.json();
    const { title } = body;

    const index = reviews.findIndex(
        (review) => review.id === Number(params.productId)
    );

    reviews[index].title = title;

    return new NextResponse(JSON.stringify(reviews[index]));
}
