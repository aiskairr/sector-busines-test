import { getPosts } from "../../Api/methods";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await getPosts();
  return res.data;
});
export const counterSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    SearchResult: [],
    searchQuery: "",
    isAscending: true,
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.SearchResult = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleSortOrder: (state) => {
      state.isAscending = !state.isAscending;
    },
    sortData: (state) => {
      const sort = state.data.slice().sort((a, b) => {
        if (state.isAscending) {
            return b.title.length - a.title.length;
          } else {
            return a.title.localeCompare(b.title);
          }
      });
      state.data = sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSearchResult, setSearchQuery, toggleSortOrder, sortData } = counterSlice.actions;

export default counterSlice.reducer;
