import "../../styles/dashboard.scss";
import DashboardSide from "./DashboardSide";
import Header from "./Header";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="container"></div>
      <DashboardSide />
    </div>
  );
}
