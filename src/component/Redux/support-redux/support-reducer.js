import {SUPPORT_US} from './support-action'
const intialState = 0;

export const supportReducer = (state = intialState,action)=>{
    switch (action.type) {
        case SUPPORT_US:
            state+=action.payload;
             return state;
        default:
           return state;
    }

}


