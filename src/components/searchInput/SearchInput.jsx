import scss from "./Searchinput.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchQuery, setSearchResult } from "../../store/slices/postsSlice";

const SearchInput = () => {
  const postsData = useSelector((state) => state.posts.data);
  const searchQuery = useSelector((state) => state.posts.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredData = postsData.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase()) && item.body.toLowerCase().includes(searchQuery.toLowerCase());
    });
    dispatch(setSearchResult(filteredData));
  }, [postsData, searchQuery, dispatch]);

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <form className={scss.searchInput_wrapper}>
      <label>
        <input
          type="text"
          placeholder="Поиск"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <span>
          <img src="./images/inputImages/search.svg" alt="searchIcon" />
        </span>
      </label>
    </form>
  );
};

export default SearchInput;
