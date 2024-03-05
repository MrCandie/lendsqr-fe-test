import "../../styles/dashboard.scss";
import Card from "../reusables/Card";
import Wrapper from "../reusables/Wrapper";
import User from "./users/User";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PaginationComponent from "../pagination/Pagination";
import { data } from "../../utils/data";
import { useEffect, useState } from "react";
import { IData } from "../../interfaces/dataInterface";
import { getStoredItem, storeItem } from "../../utils/lib";

interface IList {
  src: string;
  title: number | string;
  text: string;
}

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(50);
  const [total, setTotal] = useState<number>(0);
  const lastIndex: number = currentPage * perPage;
  const firstIndex: number = lastIndex - perPage;
  const [all, setAll] = useState<Array<IData>>([]);
  const [search, setSearch] = useState<string>("");

  const list = getStoredItem("data") || [];

  const menuList = [
    { src: "/user-icon.png", title: list.length, text: "users" },
    {
      src: "/active-user.png",
      title: list?.filter((el: IData) => el.status === "active")?.length,
      text: "active users",
    },
    {
      src: "/user-loan.png",
      title: list?.filter((el: IData) => el.loanRepayment)?.length,
      text: "users with loan",
    },
    { src: "/user-savings.png", title: 0, text: "users with savings" },
  ];

  useEffect(() => {
    if (list.length > 0) {
      const all: Array<IData> = list?.slice(firstIndex, lastIndex);
      setAll(all);
      return;
    }
    storeItem("data", data, 86400000);
    const all: Array<IData> = data?.slice(firstIndex, lastIndex);
    setAll(all);
  }, [perPage, firstIndex, lastIndex, list]);

  useEffect(() => {
    setTotal(list?.length);
  }, [list]);

  useEffect(() => {
    const val = search?.trim()?.toLowerCase();
    const filtered = list.filter(
      (el: IData) =>
        el.name.toLowerCase()?.includes(val) ||
        el.email.toLowerCase()?.includes(val) ||
        el.organization.toLowerCase()?.includes(val) ||
        el.username.toLowerCase()?.includes(val)
    );
    const all: Array<IData> = filtered?.slice(firstIndex, lastIndex);
    setAll(all);
  }, [search]);

  return (
    <Wrapper setSearch={setSearch} search={search}>
      <h1>Users</h1>
      <div className="card-wrapper">
        {menuList.map((el: IList, i: number) => (
          <Card title={el.title} text={el.text} src={el.src} key={i} />
        ))}
      </div>
      <Swiper
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        className="card-wrapper-mobile"
      >
        {menuList.map((el: IList, i: number) => (
          <SwiperSlide key={i}>
            <Card width="100%" title={el.title} text={el.text} src={el.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <User setList={setAll} list={all} />
      <PaginationComponent
        total={total}
        perPage={perPage}
        setPerPage={setPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Wrapper>
  );
}
