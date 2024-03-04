import { useState } from "react";
import "../../styles/header.scss";
import Logo from "../reusables/Logo";
import Search from "../reusables/Search";
import { Link, useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import DropDown from "../reusables/DropDown";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  return (
    <div className="header">
      <div className="menu-wrapper">
        <span>
          <AiOutlineMenu />
        </span>
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="info">
        <Search value={value} onChange={(e: any) => setValue(e.target.value)} />
        <div className="user">
          <Link to="">Docs</Link>
          <span>
            <BsBell />
          </span>
          <div onClick={() => navigate("/login")} className="avatar">
            <img loading="lazy" src="/candie.jpg" alt="user" />
          </div>
          <DropDown title="mr candie" />
        </div>
      </div>
    </div>
  );
}
