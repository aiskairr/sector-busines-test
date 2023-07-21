import { useSelector } from "react-redux";
import scss from "./TableCard.module.scss";

const TableCard = ({ body, id, title, userId }) => {
  const searchQuery = useSelector((state) => state.posts.searchQuery);
  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className={scss.activeText}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };
  return (
    <div className={scss.w_table_card}>
      <div className={scss.i_card}>
        <p>{id}</p>
      </div>
      <div className={scss.i_card}>
        <p>{highlightText(title, searchQuery)}</p>
      </div>
      <div className={scss.i_card}>
        <p>{highlightText(body, searchQuery)}</p>
      </div>
    </div>
  );
};

export default TableCard;
