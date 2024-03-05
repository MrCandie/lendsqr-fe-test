import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  "general details",
  "documents",
  "bank details",
  "loans",
  "savings",
  "app and systems",
];

export default function UserTab({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (e: number) => void;
}) {
  return (
    <>
      <div className="user-tab">
        {data.map((el: string, i: number) => (
          <h1
            className={index === i ? "tab-active" : ""}
            onClick={() => setIndex(i)}
            key={i}
          >
            {el}
          </h1>
        ))}
      </div>
      <Swiper slidesPerView={2.5} className="user-tab-mobile">
        {data.map((el: string, i: number) => (
          <SwiperSlide key={i}>
            <h1
              className={index === i ? "tab-active" : ""}
              onClick={() => setIndex(i)}
            >
              {el}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
