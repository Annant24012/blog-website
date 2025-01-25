// blogSlice.js
import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    createBlog: (state, action) => {
      const blog = action.payload;

      // If the blog has a coverImage (File object), create a URL for it
      if (blog.coverImage) {
        blog.coverImage = URL.createObjectURL(blog.coverImage); // Create a temporary URL
      }

      state.push(blog);
    },
    deleteBlog: (state, action) => {
      return state.filter((blog) => blog.id !== action.payload);
    },
  },
});

export const { createBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
