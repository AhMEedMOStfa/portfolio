import {SUPPORT_US} from './support-action'
const intialState =0;

export const supportReducer = (state = 0,action)=>{
    switch (action.type) {
        case SUPPORT_US:
            
             return state+=action.payload;
        default:
           return state;
    }

}


