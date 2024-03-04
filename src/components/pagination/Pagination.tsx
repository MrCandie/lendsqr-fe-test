import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

export default function PaginationComponent() {
  return (
    <div className="pagination">
      <div className="showing">
        <h1>Showing</h1>
        <select>
          <option>100</option>
        </select>
        <h1>out of 1000</h1>
      </div>
      <div className="btn-list">
        <button className="btn-cover">
          <FaLessThan />
        </button>
        {[1, 1, 1, 1].map((_, i: number) => (
          <button className="paginate-btn">{i + 1}</button>
        ))}
        <button className="btn-cover">
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}
