import { useState } from "react";
import "../../styles/header.scss";
import Logo from "../reusables/Logo";
import Search from "../reusables/Search";
import { Link } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import DropDown from "../reusables/DropDown";

export default function Header() {
  const [value, setValue] = useState("");
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="info">
        <Search value={value} onChange={(e: any) => setValue(e.target.value)} />
        <div className="user">
          <Link to="">Docs</Link>
          <span>
            <BsBell />
          </span>
          <div className="avatar">
            <img loading="lazy" src="/candie.jpg" alt="user" />
          </div>
          <DropDown title="mr candie" />
        </div>
      </div>
    </div>
  );
}
