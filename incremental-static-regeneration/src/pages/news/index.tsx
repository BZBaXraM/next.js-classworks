type Props = {
  articles: News[];
};

export type News = {
  id: string;
  title: string;
  content: string;
  category: string;
};

export default function NewsPage({ articles }: Props) {
  return (
    <div>
      <h1>News</h1>
      {articles.map((item) => {
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

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
