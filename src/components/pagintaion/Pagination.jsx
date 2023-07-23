import scss from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TableCard from "../../ui/tableCard/TableCard";
import { Link, useParams,useHistory  } from "react-router-dom";

const Pagination = ({ itemsPerPage = 10 }) => {
  const data = useSelector((state) => state.posts.SearchResult);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory()
  const { page } = useParams();

  useEffect(() => {
    const pageNumber = parseInt(page) || 1;
    setCurrentPage(pageNumber);
  }, [page]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      history.push(`/page/${pageNumber}`); 
    }
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
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Назад
        </button>

        <div>
          {pageNumbers.map((pageNumber) => (
            <Link key={pageNumber} to={`/page/${pageNumber}`}>
              <button
                className={
                  pageNumber === currentPage ? scss.activePageButton : ""
                }
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            </Link>
          ))}
        </div>
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default Pagination;
