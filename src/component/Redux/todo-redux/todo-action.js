/*Action */

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

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
