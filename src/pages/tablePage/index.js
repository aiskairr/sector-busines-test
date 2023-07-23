import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/searchInput/SearchInput";
import TableBlock from "../../components/tableBlock/TableBlock";
import { fetchPosts } from "../../store/slices/postsSlice";
import { useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const TablePage = () => {
  const { progress } = useSelector((state) => state.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => {}}
      />
      <SearchInput />
      <TableBlock />
    </div>
  );
};

export default TablePage;
