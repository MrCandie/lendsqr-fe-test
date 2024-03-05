import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../../styles/spinner.scss";

export default function ReusableSpinner({ title }: { title?: string }) {
  return (
    <div className="spinner">
      <span className="spin-icon">
        <AiOutlineLoading3Quarters />
      </span>
      <p>{title ? title : "Loading..."}</p>
    </div>
  );
}
