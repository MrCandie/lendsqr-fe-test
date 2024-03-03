import "../../styles/header.scss";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function DropDown({ title }: { title: string }) {
  return (
    <div className="drop-down">
      <h1>{title}</h1>
      <span>
        <MdOutlineArrowDropDown />
      </span>
    </div>
  );
}
