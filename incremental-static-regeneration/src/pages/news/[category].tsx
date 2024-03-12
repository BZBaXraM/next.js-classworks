import React from "react";
import { News } from ".";

interface Props {
  news: News[];
  category: "sports" | "politics";
}

export default function NewsCategory({ news, category }: Props) {
  console.log(news);
  return (
    <div>
      <h1>News Category: {category}</h1>
      {news.map((item) => {
        const { id, title } = item;
        return (
          <div key={id}>
            <h2>{title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({ params, req, res }: any) {
  const { category } = params;

  console.log("Requesting...", req.headers.cookie);

  console.log("Response...", res.statusCode);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      news: data,
      category,
    },
  };
}
