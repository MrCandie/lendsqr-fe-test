import DashboardSide from "../dashboard/DashboardSide";
import Header from "../dashboard/Header";
import "../../styles/dashboard.scss";

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <DashboardSide />
        <div className="center">
          <div className="inner-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
