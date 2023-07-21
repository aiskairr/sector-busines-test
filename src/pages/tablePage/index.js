import { useDispatch } from "react-redux";
import SearchInput from "../../components/searchInput/SearchInput";
import TableBlock from "../../components/tableBlock/TableBlock";
import { fetchPosts } from "../../store/slices/postsSlice";
import { useEffect } from "react";

const TablePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <SearchInput />
      <TableBlock />
    </div>
  );
};

export default TablePage;
