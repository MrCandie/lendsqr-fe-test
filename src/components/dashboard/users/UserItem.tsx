import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import MenuView from "./MenuView";
import { useState } from "react";
import { IData } from "../../../interfaces/dataInterface";

const months = [
  "Jan",
  "Feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

export default function UserItem({
  user,
  i,
  setList,
  setStatData,
}: {
  user: IData;
  i: number;
  setList: (e: Array<IData>) => void;
  setStatData: (e: Array<IData>) => void;
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [id, setId] = useState("");

  const date = new Date(user?.date);

  const formatedDate = new Date(date);

  const month = formatedDate.getMonth();
  const year = formatedDate.getFullYear();
  const day = formatedDate.getDate();
  const time = formatedDate.toLocaleTimeString();

  return (
    <>
      <div className="user-item">
        <h1 onClick={() => navigate(`/${user._id}`)} className="organization">
          {user?.organization}
        </h1>
        <h1 onClick={() => navigate(`/${user._id}`)} className="username">
          {user?.username}
        </h1>
        <h1 onClick={() => navigate(`/${user._id}`)} className="email">
          {user?.email
            ? user?.email
                ?.slice(0, 20)
                .padEnd(
                  user?.email?.length > 20 ? 22 : user?.email?.length,
                  "."
                )
            : ""}
        </h1>
        <h1 onClick={() => navigate(`/${user._id}`)} className="phone">
          {user?.phone}
        </h1>
        <h1
          style={{ textTransform: "capitalize" }}
          onClick={() => navigate(`/${user._id}`)}
          className="date"
        >
          {`${months[month]} ${day}, ${year} ${time}`}
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
                user?.status === "inactive"
                  ? "rgba(84, 95, 125, 1)"
                  : user?.status === "active"
                  ? "rgba(57, 205, 98, 1)"
                  : user?.status === "blacklisted"
                  ? "rgba(228, 3, 59, 1)"
                  : "rgba(233, 178, 0, 1)",
              backgroundColor:
                user?.status === "inactive"
                  ? "rgba(84, 95, 125, 0.15)"
                  : user?.status === "active"
                  ? "rgba(57, 205, 98, 0.15)"
                  : user?.status === "blacklisted"
                  ? "rgba(228, 3, 59, 0.15)"
                  : "rgba(233, 178, 0, 0.15)",
            }}
          >
            {user?.status}
          </h1>
          <HiOutlineDotsVertical
            onClick={() => {
              setIndex(i);
              setId(user?._id);
              setShow((prev: boolean) => !prev);
            }}
          />
        </div>
        {show && index === i && (
          <MenuView
            setShow={setShow}
            setList={setList}
            status={user?.status}
            id={id}
            setStatData={setStatData}
          />
        )}
      </div>
    </>
  );
}
