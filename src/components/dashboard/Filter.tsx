import { useState } from "react";
import Input from "../reusables/Input";
import Select from "../reusables/Select";
import Button from "../reusables/Button";

export default function Filter({ setShow }: { setShow: (e: boolean) => void }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "",
    organization: "",
  });
  return (
    <div onClick={() => setShow(false)} className="filter-wrapper">
      <div className="filter">
        <div className="filter-inner">
          <Select
            label="Organization"
            id="organization"
            options={["Buxury", "Lendsqr"]}
            value={formData.organization}
            onChange={(e: any) =>
              setFormData({ ...formData, organization: e.target.value })
            }
          />
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
          <Input
            value={formData.username}
            onChange={(e: any) =>
              setFormData({ ...formData, email: e.target.value })
            }
            label="Email"
            placeholder="Email"
            id="user"
            type="email"
          />
          <Input
            value={formData.username}
            onChange={(e: any) =>
              setFormData({ ...formData, date: e.target.value })
            }
            label="Date"
            placeholder="date"
            id="user"
            type="date"
          />
          <Select
            label="Status"
            id="status"
            options={["active", "inactive", "pending", "blacklisted"]}
            value={formData.status}
            onChange={(e: any) =>
              setFormData({ ...formData, status: e.target.value })
            }
          />
          <div className="btn-wrapper">
            <button className="btn-outline">Reset</button>
            <Button title="Filter" width="100%" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
