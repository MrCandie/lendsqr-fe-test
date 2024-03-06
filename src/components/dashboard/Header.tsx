import "../../styles/header.scss";
import Logo from "../reusables/Logo";
import Search from "../reusables/Search";
import { Link, useNavigate } from "react-router-dom";
import { BsBell } from "react-icons/bs";
import DropDown from "../reusables/DropDown";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header({
  search,
  setSearch,
  onSearch,
}: {
  search: string;
  setSearch: (e: string) => void;
  onSearch: () => void;
}) {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="header">
      <div className="menu-wrapper">
        <span onClick={() => setShow(true)}>
          <AiOutlineMenu />
        </span>
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="info">
        <Search
          searchHandler={onSearch}
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
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
      {show && <MobileMenu setShow={setShow} />}
    </div>
  );
}
