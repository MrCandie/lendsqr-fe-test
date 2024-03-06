import "../../styles/search.scss";
import { BsSearch } from "react-icons/bs";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
}

export default function Search({ value, onChange, searchHandler }: Input) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search for anything"
      />
      <button title="search" onClick={searchHandler}>
        <BsSearch />
      </button>
    </div>
  );
}
