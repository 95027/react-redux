import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./sliceCart";


const rootReducer = combineReducers({
    cart : cartSlice,
    products : productSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;