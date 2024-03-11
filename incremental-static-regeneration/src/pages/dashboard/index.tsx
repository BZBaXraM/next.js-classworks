import { useEffect, useState } from "react";

type DashboardData = {
  likes: number;
  comments: number;
  followers: number;
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data: DashboardData = await response.json();
      setDashboardData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dashboardData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Likes: {dashboardData.likes}</p>
      <p>Comments: {dashboardData.comments}</p>
      <p>Followers: {dashboardData.followers}</p>
    </div>
  );
}
