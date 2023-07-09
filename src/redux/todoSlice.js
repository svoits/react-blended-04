import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log(action);
        state.todos.push(action.payload);
      },
      prepare: text => {
        const id = nanoid();
        return { payload: { id, text } };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => action.payload !== todo.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors

export const getTodos = state => state.todos;
