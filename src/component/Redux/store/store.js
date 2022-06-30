import { createStore } from "redux";
import {combine} from './combined-reducer';

/*Create Store */

export const store = createStore(
  
  //combined Reducer
  combine
);
console.log(store.getState());
