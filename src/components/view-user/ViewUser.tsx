import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../reusables/Wrapper";
import { BsArrowLeft } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import UserTab from "./UserTab";
import PersonalInformation from "./PersonalInformation";
import { useEffect, useState } from "react";
import { IData } from "../../interfaces/dataInterface";
import ReusableSpinner from "../reusables/ReusableSpinner";
import { getStoredItem, storeItem } from "../../utils/lib";

export default function ViewUser() {
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const data = getStoredItem("data");
  const [user, setUser] = useState<IData>({
    _id: "",
    index: 0,
    status: "",
    organization: "",
    date: "",
    name: "",
    balance: "",
    tier: 3,
    accountNumber: 9912345678,
    username: "",
    bankName: "",
    phone: "",
    email: "",
    bvn: 7060780922,
    gender: "",
    maritalStatus: "",
    children: "",
    typeOfResidence: "",
    levelOfEducation: "",
    employmentStatus: "",
    sectorOfEmployment: "",
    durationOfEmployment: "",
    officialEmail: "",
    monthlyIncome: "",
    loanRepayment: "",
    twitter: "",
    facebook: "",
    instagram: "",
    guarantors: {
      name: "",
      email: "",
      phone: "",
      relationship: "",
    },
  });

  useEffect(() => {
    setLoading(true);
    const newUser: IData = data.find((el: IData) => el._id === params.id);
    setLoading(false);
    setUser(newUser);
  }, [params.id, data]);

  const balance = String(user?.balance)?.split("").slice(1).join("");

  function blacklistUser() {
    if (user?.status !== "blacklisted") {
      const newData = data.map((el: IData) => {
        return {
          ...el,
          status: el._id === params.id ? "blacklisted" : el.status,
        };
      });
      const newUser = newData.find((el: IData) => el._id === params.id);
      setUser(newUser);
      storeItem("data", newData, 86400000);
    }
  }

  function activateUser() {
    if (user?.status !== "active") {
      const newData = data.map((el: IData) => {
        return {
          ...el,
          status: el._id === params.id ? "active" : el.status,
        };
      });
      const newUser = newData.find((el: IData) => el._id === params.id);
      setUser(newUser);
      storeItem("data", newData, 86400000);
    }
  }

  return (
    <Wrapper onSearch={() => {}} search={search} setSearch={setSearch}>
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
              {user?.status !== "blacklisted" && (
                <button onClick={blacklistUser} className="blacklist-btn">
                  blacklist user
                </button>
              )}
              {user?.status !== "active" && (
                <button onClick={activateUser} className="activate-btn">
                  activate user
                </button>
              )}
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
