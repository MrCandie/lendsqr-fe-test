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

  console.log(type);

  const list = data.map((el) => el.organization);

  function filterHandler() {
    setList(data);
    setShow(false);
  }

  return (
    <div
      // onClick={() => setShow(false)}
      className="filter-wrapper"
    >
      <div className="filter">
        <div className="filter-inner">
          {type === "organization" && (
            <Select
              label="Organization"
              id="organization"
              options={list}
              value={formData.organization}
              onChange={(e: any) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />
          )}
          {type === "username" && (
            <Input
              value={formData.username}
              onChange={(e: any) =>
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
              onChange={(e: any) =>
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
              onChange={(e: any) =>
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
              onChange={(e: any) =>
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
              onChange={(e: any) =>
                setFormData({ ...formData, status: e.target.value })
              }
            />
          )}
          <div className="btn-wrapper">
            <button className="btn-outline">Reset</button>
            <Button onClick={filterHandler} title="Filter" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
