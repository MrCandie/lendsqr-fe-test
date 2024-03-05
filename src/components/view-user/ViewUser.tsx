import { useNavigate } from "react-router-dom";
import Wrapper from "../reusables/Wrapper";
import { BsArrowLeft } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import UserTab from "./UserTab";
import PersonalInformation from "./PersonalInformation";
import { useState } from "react";

export default function ViewUser() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  return (
    <Wrapper>
      <div onClick={() => navigate("/")} className="go-back">
        <BsArrowLeft />
        <p>Back to Users</p>
      </div>

      <div className="view-header">
        <h1>User Details</h1>
        <div className="view-btn-wrapper">
          <button className="blacklist-btn">blacklist user</button>
          <button className="activate-btn">activate user</button>
        </div>
      </div>

      <div className="user-detail">
        <div className="user-detail-inner">
          <div className="user-avatar">
            {/* {user avatar} */}
            <div className="user-name">
              <div className="avatar">
                <img loading="lazy" src="/avatar.png" alt="user" />
              </div>
              <div className="user-id">
                <h1>Grace Effiom</h1>
                <p>LSQFf587g90</p>
              </div>
            </div>

            {/* user tier */}
            <div className="user-tier">
              <h1>User’s Tier</h1>
              <div className="star">
                <MdStar />
                <MdStarBorder />
                <MdStarBorder />
              </div>
            </div>

            {/* account balance */}
            <div className="user-balance">
              <h1>₦200,000.00</h1>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>

          <UserTab index={index} setIndex={setIndex} />
        </div>
      </div>
      {index === 0 && <PersonalInformation />}
    </Wrapper>
  );
}
