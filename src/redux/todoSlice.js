import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  //   reducers:
});

// export const { createPost } = postsSlice.actions;

export default todoSlice.reducer;
