import { useState } from "react";
import Filter from "../Filter";

const data = [
  { title: "organization", width: "15%" },
  { title: "username", width: "11%" },
  { title: "email", width: "20%" },
  { title: "phone number", width: "15%" },
  { title: "date joined", width: "20%" },
  { title: "status", width: "19%" },
];

export default function UserTitle() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="user-title-list">
        {data.map((el: any, i: number) => (
          <ReusableTitle
            show={show}
            setShow={setShow}
            title={el.title}
            key={i}
          />
        ))}
        {show && <Filter setShow={setShow} />}
      </div>
    </>
  );
}

function ReusableTitle({
  title,
  setShow,
  show,
}: {
  title: string;
  setShow: (arg: boolean) => void;
  show: boolean;
}) {
  return (
    <div className={`user-title ${title.split(" ")[0]}`}>
      <h1>{title}</h1>
      <div
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
        className="user-image"
      >
        <img loading="lazy" src="/title-image.png" alt="title menu" />
      </div>
    </div>
  );
}
