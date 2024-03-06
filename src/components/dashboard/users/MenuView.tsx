import { useNavigate } from "react-router-dom";
import { IData } from "../../../interfaces/dataInterface";
import { getStoredItem, storeItem } from "../../../utils/lib";

export default function MenuView({
  id,
  status,
  setList,
  setShow,
  setStatData,
}: {
  id: string;
  status: string;
  setList: (e: Array<IData>) => void;
  setStatData: (e: Array<IData>) => void;
  setShow: (e: boolean) => void;
}) {
  const navigate = useNavigate();
  const data = getStoredItem("data");

  interface IMenu {
    src: string;
    title: string;
    onClick: () => void;
    show: boolean;
  }

  const menuList = [
    {
      src: "/eye.png",
      title: "View Details",
      onClick: () => navigate(`/user/${id}`),
      show: true,
    },
    {
      src: "/blacklist.png",
      title: "Blacklist User",
      onClick: () => blacklistUser(),
      show: status !== "blacklisted",
    },
    {
      src: "/activate.png",
      title: "Activate User",
      onClick: () => activateUser(),
      show: status !== "active",
    },
  ];

  function blacklistUser() {
    if (status !== "blacklisted") {
      const newData = data.map((el: IData) => {
        return {
          ...el,
          status: el._id === id ? "blacklisted" : el.status,
        };
      });
      storeItem("data", newData, 86400000);
      setList(newData?.slice(0, 50));
      setStatData(newData);
      setShow(false);
    }
  }

  function activateUser() {
    if (status !== "active") {
      const newData = data.map((el: IData) => {
        return {
          ...el,
          status: el._id === id ? "active" : el.status,
        };
      });
      storeItem("data", newData, 86400000);
      setList(newData?.slice(0, 50));
      setStatData(newData);
      setShow(false);
    }
  }

  return (
    <div className="menu-view">
      {menuList.map((el: IMenu, i: number) => (
        <>
          {el.show && (
            <div onClick={() => el.onClick()} className="menu-item" key={i}>
              <div className="icon">
                <img loading="lazy" src={el.src} alt="user" />
              </div>
              <h1>{el.title}</h1>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
