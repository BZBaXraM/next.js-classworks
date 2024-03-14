import { Comment } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../../data/comments";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Comment[] | Comment>
) {
  if (req.method === "GET") {
    return res.status(200).json(comments);
  }
  if (req.method === "POST") {
    console.log(`req.body ${req.body.comment}`);
    const newComment = {
      id: Date.now().toString(),
      name: req.body.comment,
      description: "some",
    };

    comments.push(newComment);

    res.status(201).json(newComment);
  }
}
