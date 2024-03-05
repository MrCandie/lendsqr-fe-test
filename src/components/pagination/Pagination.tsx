import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

export default function PaginationComponent({
  total,
  setCurrentPage,
  perPage,
  currentPage,
  setPerPage,
}: {
  total: number;
  perPage: number;
  currentPage: number;
  setCurrentPage: (e: number) => void;
  setPerPage: (e: number) => void;
}) {
  const totalPage = total / +perPage;

  return (
    <div className="pagination">
      <div className="showing">
        <h1>Showing</h1>
        <select onChange={(e) => setPerPage(+e.target.value)}>
          <option>50</option>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
          <option>500</option>
        </select>
        <h1>out of {total?.toLocaleString()}</h1>
      </div>
      <div className="btn-list">
        <button
          onClick={() => {
            if (+currentPage === 1) {
              setCurrentPage(1);
            } else {
              const index = currentPage;
              setCurrentPage(index - 1);
            }
          }}
          className="btn-cover"
        >
          <FaLessThan />
        </button>

        {Array.from({ length: totalPage }, (_, i) => (
          <button
            className={
              +currentPage === i + 1 ? "paginate-active" : "paginate-btn"
            }
            key={i}
            onClick={() => {
              setCurrentPage(i + 1);
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => {
            if (+currentPage === +totalPage) {
              setCurrentPage(+totalPage);
            } else {
              const index = currentPage;
              setCurrentPage(index + 1);
            }
          }}
          className="btn-cover"
        >
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}
