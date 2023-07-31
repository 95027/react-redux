import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data : [],
    loading : true,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts(state, action){
            state.data = action.payload;
            state.loading =  false;
        }
    }
});

export const { fetchProducts } = productSlice.actions;


export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch, getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = await data.json();
        dispatch(fetchProducts(result));
    }
}