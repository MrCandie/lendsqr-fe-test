import { useState } from "react";

const data = [
  "general details",
  "documents",
  "bank details",
  "loans",
  "savings",
  "app and systems",
];

export default function UserTab() {
  const [index, setIndex] = useState(0);
  return (
    <div className="user-tab">
      {data.map((el: string, i: number) => (
        <h1
          className={index === i ? "tab-active" : ""}
          onClick={() => setIndex(i)}
          key={i}
        >
          {el}
        </h1>
      ))}
    </div>
  );
}
