import { useState } from "react";
import Filter from "../Filter";
import { IData } from "../../../interfaces/dataInterface";

const data = [
  { title: "organization" },
  { title: "username" },
  { title: "email" },
  { title: "phone number" },
  { title: "date joined" },
  { title: "status", width: "19%" },
];

interface ITitle {
  title: string;
}

export default function UserTitle({
  setList,
}: {
  setList: (e: Array<IData>) => void;
}) {
  const [show, setShow] = useState(false);
  const [type, setType] = useState<string>("");
  return (
    <>
      <div className="user-title-list">
        {data.map((el: ITitle, i: number) => (
          <ReusableTitle
            show={show}
            setShow={setShow}
            title={el.title}
            key={i}
            setType={setType}
          />
        ))}
        {show && <Filter type={type} setList={setList} setShow={setShow} />}
      </div>
    </>
  );
}

function ReusableTitle({
  title,
  setShow,
  show,
  setType,
}: {
  title: string;
  setShow: (arg: boolean) => void;
  show: boolean;
  setType: (e: string) => void;
}) {
  return (
    <div className={`user-title ${title.split(" ")[0]}`}>
      <h1>{title}</h1>
      <div
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setType(title);
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
