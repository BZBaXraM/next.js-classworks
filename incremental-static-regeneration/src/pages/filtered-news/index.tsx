import { useState, useEffect } from "react";

type Article = {
  title: string;
  id: number;
  category: string;
};

interface Props {
  news: Article[];
}

const FilteredNewsPage = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/news?category=sports")
      .then((response) => response.json())
      .then((data) => setNewsList(data));
  }, []);

  return (
    <div>
      <h1>News</h1>
      {newsList.map((article) => (
        <h2 key={article.id}>
          {article.title} {article.category}
        </h2>
      ))}
    </div>
  );
};

export default FilteredNewsPage;
