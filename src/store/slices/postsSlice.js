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
    currentItems: [],
    searchQuery: "",
    isAscending: true,
    progress: 5
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
    currentPaginationItems: (state, action) => {
        state.currentItems = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.progress = 100;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.progress = 70;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.progress = 100;
    });
  },
});

export const { setSearchResult, setSearchQuery, toggleSortOrder, sortData, currentPaginationItems } = counterSlice.actions;

export default counterSlice.reducer;
