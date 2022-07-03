import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter-toolkit/counter-slice";
import {combine} from './combined-reducer';
import productsSlice from "../productsSlice/productSlice";

/*Create Store */

export const store = configureStore({
  reducer : {
   combine,
   counterSlice,
   productsSlice
  }
});
