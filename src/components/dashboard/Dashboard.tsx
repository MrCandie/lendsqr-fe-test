import "../../styles/dashboard.scss";
import Card from "../reusables/Card";
import Wrapper from "../reusables/Wrapper";
import User from "./users/User";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PaginationComponent from "../pagination/Pagination";

const data = [
  { src: "/user-icon.png", title: 2453, text: "users" },
  { src: "/active-user.png", title: 7453, text: "active users" },
  { src: "/user-loan.png", title: 7453, text: "users with loan" },
  { src: "/user-savings.png", title: 7453, text: "users with savings" },
];

export default function Dashboard() {
  return (
    <Wrapper>
      <h1>Users</h1>
      <div className="card-wrapper">
        {data.map((el: any, i: number) => (
          <Card title={el.title} text={el.text} src={el.src} key={i} />
        ))}
      </div>
      <Swiper
        slidesPerView={1}
        pagination={true}
        modules={[Pagination]}
        className="card-wrapper-mobile"
      >
        {data.map((el: any, i: number) => (
          <SwiperSlide key={i}>
            <Card width="100%" title={el.title} text={el.text} src={el.src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <User />
      <PaginationComponent />
    </Wrapper>
  );
}
