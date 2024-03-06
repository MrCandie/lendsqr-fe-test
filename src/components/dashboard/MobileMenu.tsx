import { AiOutlineClose } from "react-icons/ai";
import ReusableSide from "./ReusableSide";
import Logo from "../reusables/Logo";

export default function MobileMenu({
  setShow,
}: {
  setShow: (e: boolean) => void;
}) {
  return (
    <>
      <div onClick={() => setShow(false)} className="mobile-menu-wrapper" />
      <div className="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <Logo />
            <AiOutlineClose
              onClick={() => setShow(false)}
              color="red"
              size={18}
            />
          </div>
          <ReusableSide />
        </div>
      </div>
    </>
  );
}
