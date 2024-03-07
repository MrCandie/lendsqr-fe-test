import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  useEffect(() => {
    backToHome();
  });
  return <div></div>;
}
