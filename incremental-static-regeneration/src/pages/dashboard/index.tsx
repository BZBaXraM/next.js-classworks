import { DashboardData } from "@/types";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/dashboard");
      const data: DashboardData = await response.json();
      setDashboardData(data);
      setLoading(false);
    };
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
      <h2>Likes: {dashboardData?.likes}</h2>
      <h2>Posts: {dashboardData?.posts}</h2>
      <h3>Followers: {dashboardData?.followers}</h3>
      <h3>Followings: {dashboardData.followings}</h3>
    </div>
  );
}
