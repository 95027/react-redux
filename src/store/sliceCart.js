import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    cartItems : [],
    amount : 0,
}


const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        add(state, action){
            const item = state.cartItems.find(pro => pro.id === action.payload.id);
            if(!item){
                state.cartItems.push(action.payload);
                state.amount++;
            }
        },
        clearCart(state){
            state.cartItems = [];
            state.amount =0;
        },
        remove(state, action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            state.amount--;
        }
    }
})


export const {add, remove, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

