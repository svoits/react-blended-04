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
        return { payload: { id, text, likes: 0 } };
      },
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => action.payload !== todo.id);
    },
    incrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if(todo.id  === action.payload){
          return {
            ...todo,
            likes: todo.likes+1,
          }
          
        }
        return todo;
      })
    },
    decrementLike(state, action) {
      state.todos = state.todos.map(todo => {
        if(todo.id  === action.payload){
          if(todo.likes === 0) return todo;
          return {
            ...todo,
            likes: todo.likes-1,
          }
          
        }
        return todo;
      })
    }
  },
});

export const { addTodo, deleteTodo, incrementLike, decrementLike } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors

export const getTodos = state => state.todos;
