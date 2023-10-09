import { useEffect, useRef } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const Pagination = ({
  pages,
  currentPage,
  setCurrentPage,
  updateFilter,
  paginationQuery,
  activePagination,
  setActivePagination }) => {

  const paginRef = useRef();

  const generatedPages = [];

  for (let i = 1; i <= pages; i++) {

    generatedPages.push(i);

  }

  return (
    <div className="shop-pagination">
      <button
        onClick={() => {
          setCurrentPage((prev) => prev - 1)
          updateFilter("page", currentPage - 1)
          setActivePagination(currentPage - 1)
        }}
        className="page previous"
        disabled={currentPage === 1}
        ref={paginRef}
      >
        <FaAnglesLeft />
      </button>

      {generatedPages.map((page) => (
        <div
          onClick={() => {
            setCurrentPage(page)
            updateFilter("page", page)
            setActivePagination(page)
          }}
          className={activePagination === page ? "page active" : "page"}
          key={page}
        >
          {page}
        </div>
      ))}

      <button
        onClick={() => {
          setCurrentPage((prev) => prev + 1)
          updateFilter("page", currentPage + 1)
          setActivePagination(currentPage + 1)
        }}
        className="page next"
        disabled={currentPage === pages}
      >
        <FaAnglesRight />
      </button>
    </div>
  );
};

export default Pagination;
