import useSWR from "swr";

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
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error loading data - {error.message}</h1>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => mutateData()}>Mutate data</button>
        <h2>Likes: {data?.likes}</h2>
        <h2>Posts: {data?.posts}</h2>
        <h3>Followers: {data?.followers}</h3>
        <h3>Followings: {data.followings}</h3>
      </div>
    </div>
  );
}
