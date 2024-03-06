import DashboardSide from "../dashboard/DashboardSide";
import Header from "../dashboard/Header";
import "../../styles/dashboard.scss";

export default function Wrapper({
  children,
  search,
  setSearch,
  onSearch,
}: Readonly<{
  children: React.ReactNode;
  search: string;
  setSearch: (e: string) => void;
  onSearch: () => void;
}>) {
  return (
    <div className="dashboard">
      <Header onSearch={onSearch} search={search} setSearch={setSearch} />
      <div className="container">
        <DashboardSide />
        <div className="center">
          <div className="inner-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
