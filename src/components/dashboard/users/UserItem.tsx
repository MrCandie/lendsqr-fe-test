import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function UserItem({
  organization,
  username,
  email,
  phoneNumber,
  date,
  status,
}: {
  organization: "lendsqr";
  username: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: string;
}) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/user/gfhdfs`)} className="user-item">
      <h1
        className="organization"
        // style={{ width: "15%", textTransform: "capitalize" }}
      >
        {organization}
      </h1>
      <h1
        className="username"
        // style={{ width: "11%", textTransform: "capitalize" }}
      >
        {username}
      </h1>
      <h1 className="email">{email}</h1>
      <h1 className="phone">{phoneNumber}</h1>
      <h1 className="date">{date}</h1>
      <div
        className="status"
        // style={{ width: "19%", textTransform: "capitalize" }}
      >
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.3rem 1rem",
            borderRadius: "16px",
            color:
              status === "inactive"
                ? "rgba(84, 95, 125, 1)"
                : status === "active"
                ? "rgba(57, 205, 98, 1)"
                : status === "blacklisted"
                ? "rgba(228, 3, 59, 1)"
                : "rgba(233, 178, 0, 1)",
            backgroundColor:
              status === "inactive"
                ? "rgba(84, 95, 125, 0.15)"
                : status === "active"
                ? "rgba(57, 205, 98, 0.15)"
                : status === "blacklisted"
                ? "rgba(228, 3, 59, 0.15)"
                : "rgba(233, 178, 0, 0.15)",
          }}
        >
          {status}
        </h1>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
}
