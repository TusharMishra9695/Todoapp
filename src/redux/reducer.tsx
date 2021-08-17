import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {    
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removeTodos: (state, action) => {
      return state.filter((item: any) => item.id !== action.payload);
    },

    updateTodos: (state, action) => {
      return state.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    completeTodos: (state, action) => {
      return state.map((todo: any) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
