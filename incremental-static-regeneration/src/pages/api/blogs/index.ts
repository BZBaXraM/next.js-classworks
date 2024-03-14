import { NextApiRequest, NextApiResponse } from "next";
import { blogs } from "../../../../data/blogs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(blogs);
}
