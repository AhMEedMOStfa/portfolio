import { ADD_TODO } from "./todo-action";
import { DELETE_TODO } from "./todo-action";

/*Initial State*/
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
  