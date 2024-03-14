import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;

  if (typeof commentId === "string") {
    const comment = comments.find((item) => item.id === commentId);
    const index = comments.findIndex((item) => item.id === commentId);
    console.log(`comment: ${comment}`);

    if (req.method === "GET") {
      return res.status(200).json(comment);
    }
    if (req.method === "DELETE") {
      comments.splice(index, 1);
      return res.status(200).json(comments);
    }
    if (req.method === "PUT") {
      if (index !== -1) {
        comments[index] = { ...comments[index], name: req.body.comment };
        return res.status(200).json(comments[index]);
      } else {
        return res.status(404).json({ message: "Comment not found" });
      }
    }
  }
}
