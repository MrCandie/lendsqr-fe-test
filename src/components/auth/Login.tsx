import { useState } from "react";
import "../../styles/login.scss";
import Input from "../reusables/Input";
import Button from "../reusables/Button";
import { Link } from "react-router-dom";
import Password from "../reusables/Password";
import Logo from "../reusables/Logo";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  return (
    <div className="login">
      <div className="img-container">
        <div className="inner-image-container">
          <Logo />
          <div className="auth">
            <img loading="lazy" src="/auth.png" alt="auth image" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-container">
          <div className="logo-mobile">
            <img loading="lazy" src="/logo.png" alt="auth image" />
          </div>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e: any) =>
              setFormData({ ...formData, email: e.target.value })
            }
            id="email"
          />
          <Password
            value={formData.password}
            onChange={(e: any) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Link to="">Forgot PASSWORD?</Link>
          <Button onClick={() => {}} title="Login" width="100%" />
        </div>
      </div>
    </div>
  );
}
