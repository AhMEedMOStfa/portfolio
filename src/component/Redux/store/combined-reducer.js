import { combineReducers } from "redux";
import { todoReducer } from "../todo-redux/todo-reducer";
import {supportReducer} from '../support-redux/support-reducer'

export const combine = combineReducers({
  todoReducer,
  supportReducer
});
