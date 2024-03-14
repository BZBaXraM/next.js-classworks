import { Article } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  const articles: Article[] = [
    { title: "Test", id: 1, category: "Testing" },
    { title: "Теплом так веет от комнат", id: 2 },
  ];
  res.json(articles);
}
