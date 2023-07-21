import scss from "./TableBlock.module.scss";
import Pagination from "../pagintaion/Pagination";
import { sortData, toggleSortOrder } from "../../store/slices/postsSlice";
import { useDispatch } from "react-redux";

const TableBlock = () => {
  const dispatch = useDispatch();
  const handleSort = () => {
    dispatch(toggleSortOrder());
    dispatch(sortData());
  };
  return (
    <div className={scss.w__tableBlock}>
      <div className={scss.table_header__item}>
        <div className={scss.b_table}>
          <button onClick={handleSort} className={scss.i__table_button}>
            <span className={scss.button__title}>ID</span>
            <img src="./images/theadImages/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className={scss.b_table}>
          <button onClick={handleSort} className={scss.i__table_button}>
            <span className={scss.button__title}>Заголовок</span>
            <img src="./images/theadImages/arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className={scss.b_table}>
          <button onClick={handleSort} className={scss.i__table_button}>
            <span className={scss.button__title}>Описание</span>
            <img src="./images/theadImages/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
      <div className={scss.table_body__item}>
        <Pagination />
      </div>
    </div>
  );
};

export default TableBlock;
