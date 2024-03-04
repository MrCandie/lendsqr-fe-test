import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import MenuView from "./MenuView";
import { useState } from "react";

export default function UserItem({
  organization,
  username,
  email,
  phoneNumber,
  date,
  status,
  i,
}: {
  organization: "lendsqr";
  username: string;
  email: string;
  phoneNumber: string;
  date: string;
  status: string;
  i: number;
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="user-item">
        <h1 onClick={() => navigate(`/user/gfhdfs`)} className="organization">
          {organization}
        </h1>
        <h1 onClick={() => navigate(`/user/gfhdfs`)} className="username">
          {username}
        </h1>
        <h1 onClick={() => navigate(`/user/gfhdfs`)} className="email">
          {email}
        </h1>
        <h1 onClick={() => navigate(`/user/gfhdfs`)} className="phone">
          {phoneNumber}
        </h1>
        <h1 onClick={() => navigate(`/user/gfhdfs`)} className="date">
          {date}
        </h1>
        <div className="status">
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
          <HiOutlineDotsVertical
            onClick={() => {
              setIndex(i);
              setShow((prev: boolean) => !prev);
            }}
          />
        </div>
        {show && index === i && <MenuView />}
      </div>
    </>
  );
}
