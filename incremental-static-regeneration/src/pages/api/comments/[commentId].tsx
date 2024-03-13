import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;

  if (typeof commentId === "string") {
    const comment = comments.find((comment) => comment.id === commentId);

    const index = comments.findIndex((comment) => comment.id === commentId);

    if (req.method === "GET") return res.status(200).json(comment);

    if (req.method === "DELETE") {
      if (index !== -1) {
        comments.splice(index, 1);
      }
      return res.status(204).json(comments);
    }

    if (req.method === "PUT") {
      const { comment } = req.body;
      comments[index] = { ...comments[index], comment };
      return res.status(200).json(comments[index]);
    }
  }
}
