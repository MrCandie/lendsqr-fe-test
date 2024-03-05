import { MdOutlineArrowDropDown } from "react-icons/md";
import "../../styles/dashboard.scss";
import { NavLink } from "react-router-dom";

export default function Menu({
  title,
  src,
  show = false,
  path,
}: {
  title: string;
  src: string;
  show: boolean;
  path: string;
}) {
  return (
    <NavLink to={path} className="drop-down">
      <div className="icon">
        <img loading="lazy" src={src} alt="user" />
      </div>

      <div className="text-container">
        <h1>{title}</h1>

        {show && (
          <span>
            <MdOutlineArrowDropDown />
          </span>
        )}
      </div>
    </NavLink>
  );
}
