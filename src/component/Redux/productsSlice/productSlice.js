import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://fakestoreapi.com/products";

export const getProductsItems = createAsyncThunk('products/getProductsItems',()=>{
    return fetch(baseUrl)
    .then((res) => res.json())
    .catch((err)=>console.log('error'));
})

const initialState = {
    products:[],
    loading:false
}
const ProductsSlice = createSlice({
    name:'Products',
    initialState,
    reducers:{
        addProducts:()=>{
            console.log('products');
        }
    },
    extraReducers:{
        [getProductsItems.pending]:(state)=>{
            state.loading=true;
        },
        [getProductsItems.fulfilled]:(state,actions)=>{
            state.products = actions.payload;
            state.loading=false;
        },
        [getProductsItems.rejected]:(state)=>{
            state.loading=false;
        },
    }
})

export const {addProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;