import { useState } from "react";
import Input from "../reusables/Input";
import Select from "../reusables/Select";
import Button from "../reusables/Button";
import { data } from "../../utils/data";
import { IData } from "../../interfaces/dataInterface";

export default function Filter({
  setShow,
  setList,
  type,
}: {
  setShow: (e: boolean) => void;
  setList: (e: Array<IData>) => void;
  type: string;
}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "",
    organization: "",
  });

  const list = data.map((el) => el.organization);

  function filterHandler() {
    if (type === "status") {
      const users: Array<IData> = data.filter(
        (el: IData) =>
          el.status.toLowerCase() === formData.status?.toLowerCase()
      );
      setList(users);
    }

    if (type === "email") {
      const users: Array<IData> = data.filter((el: IData) =>
        el.email.toLowerCase()?.includes(formData.email?.toLowerCase())
      );
      setList(users);
    }

    if (type === "username") {
      const users: Array<IData> = data.filter((el: IData) =>
        el.username.toLowerCase()?.includes(formData.username?.toLowerCase())
      );
      setList(users);
    }

    if (type === "organization") {
      const users: Array<IData> = data.filter((el: IData) =>
        el.organization
          .toLowerCase()
          ?.includes(formData.organization?.toLowerCase())
      );
      setList(users);
    }

    if (type === "phone number") {
      const users: Array<IData> = data.filter((el: IData) =>
        el.phone.toLowerCase()?.includes(formData.phone?.toLowerCase())
      );
      setList(users);
    }
    setShow(false);
  }

  function resetHandler() {
    setFormData({
      username: "",
      email: "",
      date: "",
      phone: "",
      status: "",
      organization: "",
    });
    setList(data?.slice(0, 51));
    setShow(false);
  }

  return (
    <div className="filter-wrapper">
      <div className="filter">
        <div className="filter-inner">
          {type === "organization" && (
            <Select
              label="Organization"
              id="organization"
              options={list}
              value={formData.organization}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />
          )}
          {type === "username" && (
            <Input
              value={formData.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, username: e.target.value })
              }
              label="Username"
              placeholder="User"
              id="user"
              type="text"
            />
          )}
          {type === "email" && (
            <Input
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
              label="Email"
              placeholder="Email"
              id="user"
              type="email"
            />
          )}
          {type === "date joined" && (
            <Input
              value={formData.date}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, date: e.target.value })
              }
              label="Date"
              placeholder="date"
              id="user"
              type="date"
            />
          )}
          {type === "phone number" && (
            <Input
              value={formData.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              label="phone"
              placeholder="Phone"
              id="phone"
              type="tel"
            />
          )}
          {type === "status" && (
            <Select
              label="Status"
              id="status"
              options={["active", "inactive", "pending", "blacklisted"]}
              value={formData.status}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, status: e.target.value })
              }
            />
          )}
          <div className="btn-wrapper">
            <button onClick={resetHandler} className="btn-outline">
              Reset
            </button>
            <Button onClick={filterHandler} title="Filter" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
