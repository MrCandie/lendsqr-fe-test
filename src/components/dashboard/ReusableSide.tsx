import Menu from "./Menu";

interface IOptions {
  title: string;
  src: string;
  path: string;
}

import "../../styles/dashboard.scss";

const data = [
  {
    title: "customers",
    options: [
      { title: "user", src: "/user.png", path: "/users" },
      { title: "guarantors", src: "/guarantor.png", path: "/guarantor" },
      { title: "loans", src: "/loan.png", path: "/loans" },
      {
        title: "Decision Models",
        src: "/decision.png",
        path: "/devision-models",
      },
      { title: "Savings", src: "/savings.png", path: "/savings" },
      { title: "Loan Requests", src: "/request.png", path: "loan-requests" },
      { title: "Whitelist", src: "/whitelist.png", path: "whitelist" },
      { title: "Karma", src: "/karma.png", path: "karma" },
    ],
  },
  {
    title: "business",
    options: [
      { title: "organization", src: "/case.png", path: "/organization" },
      { title: "loan products", src: "/request.png", path: "/loan-products" },
      {
        title: "savings products",
        src: "/savings-product.png",
        path: "savings-products",
      },
      { title: "fees and charges", src: "/fees.png", path: "fees and charges" },
      { title: "Transactions", src: "/transactions.png", path: "transactions" },
      { title: "Services", src: "/services.png", path: "services" },
      {
        title: "Service Account",
        src: "/whitelist.png",
        path: "service-account",
      },
      { title: "Settlement", src: "/settlement.png", path: "settlement" },
      { title: "Reports", src: "/report.png", path: "report" },
    ],
  },
  {
    title: "settings",
    options: [
      { title: "preferences", src: "/preferences.png", path: "preferences" },
      {
        title: "fees and pricing",
        src: "/pricing.png",
        path: "/fees-and pricing",
      },
      { title: "audit logs", src: "/audit.png", path: "audit-logs" },
    ],
  },
];

export default function ReusableSide() {
  return (
    <>
      <Menu
        path="/switch"
        title="Switch Organization"
        src="/case.png"
        show={true}
      />
      <Menu path="/" title="Dashboard" src="/dashboard.png" show={false} />
      <div className="nav-wrapper">
        {data?.map(
          (el: { title: string; options: Array<IOptions> }, i: number) => (
            <div key={i} className="nav-item">
              <h1>{el.title}</h1>
              {el.options.map((item: IOptions, index: number) => (
                <Menu
                  path={item.path}
                  key={index}
                  title={item.title}
                  src={item.src}
                  show={false}
                />
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}
