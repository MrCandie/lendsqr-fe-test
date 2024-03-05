import { useNavigate } from "react-router-dom";

export default function MenuView({ id }: { id: string }) {
  const navigate = useNavigate();

  interface IMenu {
    src: string;
    title: string;
    onClick: () => void;
  }

  const data = [
    {
      src: "/eye.png",
      title: "View Details",
      onClick: () => navigate(`/user/${id}`),
    },
    { src: "/blacklist.png", title: "Blacklist User", onClick: () => {} },
    { src: "/activate.png", title: "Activate User", onClick: () => {} },
  ];
  return (
    <div className="menu-view">
      {data.map((el: IMenu, i: number) => (
        <div onClick={() => el.onClick()} className="menu-item" key={i}>
          <div className="icon">
            <img loading="lazy" src={el.src} alt="user" />
          </div>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
}
