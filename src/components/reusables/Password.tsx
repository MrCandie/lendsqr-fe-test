import { useState } from "react";
import "../../styles/password.scss";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Password({ value, onChange }: Input) {
  const [type, setType] = useState("password");
  return (
    <div className="password">
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder="Password"
      />
      <button
        onClick={() =>
          type === "password" ? setType("text") : setType("password")
        }
      >
        {type === "password" ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
}
