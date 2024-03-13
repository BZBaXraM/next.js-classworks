import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") return res.status(200).json(comments);
  if (req.method === "POST") {
    const { comment } = req.body;
    const newComment = {
      id: (comments.length + 1).toString(),
      name: "Bahram",
      comment,
    };
    comments.push(newComment);
    return res.status(201).json(newComment);
  }
  if (req.method === "DELETE") {
    const { id } = req.query;
    const index = comments.findIndex((comment) => comment.id === Number(id));
    if (index !== -1) {
      comments.splice(index, 1);
    }
    return res.status(200).json(comments);
  }
}
