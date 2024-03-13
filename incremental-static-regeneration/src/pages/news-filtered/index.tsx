import { Article } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return data;
};

interface Props {
  news: Article[];
}

const News = ({ news }: Props) => {
  // const { data, error, isLoading, mutate } = useSWR("news", fetcher);
  const [newsList, setNewsList] = useState<Article[]>(news);
  const router = useRouter();

  const fetchSportEvents = async () => {
    const response = await fetch("http://localhost:4000/news?category=sports");
    const data = await response.json();

    setNewsList(data);

    router.push("news-filtered?category=sports", undefined, { shallow: true });
  };

  // useEffect(() => {
  //   if (!data) return;

  //   setNewsList(data);
  // }, [data]);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>Error loading data - {error.message}</h1>;
  // }

  return (
    <div>
      <h1>News</h1>
      <button onClick={fetchSportEvents}>Sports News</button>
      {newsList.map((article) => (
        <div key={article.id}>
          <h2>
            {article.title} {article.category}
          </h2>
          <p>Category - {article.category}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

export async function getServerSideProps(query: any) {
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/news?${queryString}`);
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
