const data = [
  { src: "/eye.png", title: "View Details" },
  { src: "/blacklist.png", title: "Blacklist User" },
  { src: "/activate.png", title: "Activate User" },
];

export default function MenuView() {
  return (
    <div className="menu-view">
      {data.map((el: any, i: number) => (
        <div className="menu-item" key={i}>
          <div className="icon">
            <img loading="lazy" src={el.src} alt="user" />
          </div>
          <h1>{el.title}</h1>
        </div>
      ))}
    </div>
  );
}
