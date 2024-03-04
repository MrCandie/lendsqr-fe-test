const data = [
  { title: "organization", width: "15%" },
  { title: "username", width: "11%" },
  { title: "email", width: "20%" },
  { title: "phone number", width: "15%" },
  { title: "date joined", width: "20%" },
  { title: "status", width: "19%" },
];

export default function UserTitle() {
  return (
    <div className="user-title-list">
      {data.map((el: any, i: number) => (
        <ReusableTitle title={el.title} key={i} />
      ))}
    </div>
  );
}

function ReusableTitle({ title }: { title: string }) {
  return (
    <div className={`user-title ${title.split(" ")[0]}`}>
      <h1>{title}</h1>
      <div className="user-image">
        <img loading="lazy" src="/title-image.png" alt="title menu" />
      </div>
    </div>
  );
}
