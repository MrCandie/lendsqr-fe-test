import { useState } from "react";
import "../../styles/search.scss";
import { BsSearch } from "react-icons/bs";

interface Input {
  value: string;
  onChange: (e: any) => void;
}

export default function Search({ value, onChange }: Input) {
  const [type, setType] = useState("password");
  return (
    <div className="search">
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search for anything"
      />
      <button
        onClick={() =>
          type === "password" ? setType("text") : setType("password")
        }
      >
        <BsSearch />
      </button>
    </div>
  );
}
