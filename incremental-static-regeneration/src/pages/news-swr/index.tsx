import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return data;
};
type Article = {
  title: string;
  id: number;
  category: string;
};

interface Props {
  news: Article[];
}

const News = ({ news }: Props) => {
  const { data, error, isLoading, mutate } = useSWR("news", fetcher);
  const [newsList, setNewsList] = useState<Article[]>(news);
  const router = useRouter();

  const fetchSportsNews = async () => {
    const response = await fetch("http://localhost:4000/news?category=sports");
    const data = await response.json();
    setNewsList(data);
  };

  useEffect(() => {
    if (!data) return;
    setNewsList(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  router.push("/filtered-news", undefined, { shallow: true });

  return (
    <div>
      <h1>News</h1>
      <button onClick={fetchSportsNews}>Fetch Sports News</button>
      {newsList.map((article) => (
        <h2 key={article.id}>
          {article.title} {article.category}
        </h2>
      ))}
    </div>
  );
};

export default News;

export async function getServerSideProps(query: any) {
  const { category } = query;
  const response = await fetch(
    `http://localhost:4000/news${category ? `?category=${category}` : ""}`
  );
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
