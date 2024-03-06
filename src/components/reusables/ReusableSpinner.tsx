import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "../../styles/spinner.scss";

export default function ReusableSpinner({ title }: { title?: string }) {
  return (
    <div title="spinner" className="spinner">
      <span className="spin-icon">
        <AiOutlineLoading3Quarters />
      </span>
      <p title="spinner-label">{title ? title : "Loading..."}</p>
    </div>
  );
}
