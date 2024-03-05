import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../reusables/Wrapper";
import { BsArrowLeft } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import UserTab from "./UserTab";
import PersonalInformation from "./PersonalInformation";
import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import { IData } from "../../interfaces/dataInterface";
import ReusableSpinner from "../reusables/ReusableSpinner";

export default function ViewUser() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const params = useParams();
  const [user, setUser] = useState<IData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const newUser = data.find((el: IData) => el._id === params.id);
    setLoading(false);
    setUser(newUser);
  }, [params.id]);

  const balance = String(user?.balance)?.split("").slice(1).join("");

  return (
    <Wrapper>
      {loading ? (
        <ReusableSpinner title="Fetching User" />
      ) : (
        <>
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
                    <h1>{user?.name}</h1>
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
                  <h1>₦{balance}</h1>
                  <p>
                    {user?.accountNumber}/{user?.bankName}
                  </p>
                </div>
              </div>

              <UserTab index={index} setIndex={setIndex} />
            </div>
          </div>
          {index === 0 && <PersonalInformation user={user} />}
        </>
      )}
    </Wrapper>
  );
}
