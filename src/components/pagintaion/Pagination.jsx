import scss from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import TableCard from "../../ui/tableCard/TableCard";

const Pagination = ({ itemsPerPage = 10 }) => {
  const data = useSelector((state) => state.posts.SearchResult);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div>
      {currentItems.map((item) => (
        <TableCard key={item.id} {...item} />
      ))}

      <div className={scss.w_pagination}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Назад
        </button>

        <div>
          {pageNumbers.map((pageNumber) => (
            <button
              className={
                pageNumber === currentPage ? scss.activePageButton : ""
              }
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Pagination;
