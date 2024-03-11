import useSWR, { mutate } from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function Dashboard() {
  const { data, error, isLoading, mutate } = useSWR("dashboard", fetcher);
  const mutateData = () => {
    mutate();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Likes: {data.likes}</p>
      <p>Comments: {data.comments}</p>
      <p>Followers: {data.followers}</p>
      <button
        style={{ marginTop: "10px", background: "red" }}
        onClick={() => mutateData()}
      >
        Refresh
      </button>
    </div>
  );
}
