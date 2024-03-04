import UserItem from "./UserItem";

const data = [
  {
    organization: "lendsqr",
    username: "adedeji",
    email: "adedeji@lendsqr.com",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "inactive",
  },
  {
    organization: "buxury",
    username: "candie",
    email: "adedeji@buxury.ng",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "active",
  },
  {
    organization: "irorun",
    username: "bimpe",
    email: "bimpe@irorun.com",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "pending",
  },
  {
    organization: "lendsqr",
    username: "opeyemi",
    email: "opeyemi@lendsqr.com",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "blacklisted",
  },
  {
    organization: "buxury",
    username: "candie",
    email: "adedeji@buxury.ng",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "active",
  },
  {
    organization: "irorun",
    username: "bimpe",
    email: "bimpe@irorun.com",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "pending",
  },
  {
    organization: "lendsqr",
    username: "opeyemi",
    email: "opeyemi@lendsqr.com",
    phoneNumber: "09087654321",
    date: new Date().toLocaleString(),
    status: "blacklisted",
  },
];

export default function UserList() {
  return (
    <div className="user-list">
      {data.map((el: any, i: number) => (
        <UserItem
          organization={el.organization}
          email={el.email}
          phoneNumber={el.phoneNumber}
          date={el.date}
          status={el.status}
          key={i}
          username={el.username}
          i={i}
        />
      ))}
    </div>
  );
}
