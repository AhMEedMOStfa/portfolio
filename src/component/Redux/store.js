import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

/*Action */
export const addTodo = (payLoad) => {
  return {
    type: ADD_TODO,
    payLoad: payLoad,
  };
};
export const deleteTodo = (payLoad) => {
  return {
    type: DELETE_TODO,
    payLoad,
  };
};
/*Initial State */
const initialState = {
  todos: [],
};
/*Reducer*/
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payLoad] };

    case DELETE_TODO:
      return {...state,todos: [...state.todos.filter((item, i) => {
            // console.log("item", item);
            // console.log("index", i);
            return i !== action.payLoad;
          }),
        ],
      };
    default:
      return state;
  }
};
/*Create Store */
export const store = createStore(
  //reducer
  todoReducer
);
