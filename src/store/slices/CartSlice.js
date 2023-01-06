import { createSlice } from "@reduxjs/toolkit";
import data from '../data'

const initialState = {
    items: data,
    totalCost: 0,
    totalCount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        getCartTotal: state => {
            let { totalCost, totalCount } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price*amount;
                    cartTotal.totalCost += itemTotal;
                    cartTotal.totalCount += amount;
                    return cartTotal
                },
                { totalCost:0, totalCount: 0 }
            );
            state.totalCost=parseInt(totalCost.toFixed(2));
            state.totalCount= totalCount;
        },
        increase: (state, action) => {
            state.items = state.items.map(item => {
                // Checking if the currecnt element is the one on hwihc hte acion was performed on the UI
                if(item.id === action.payload){
                    return { ...item, amount: item.amount+1 };
                }
                return item;
            });
        },
        decrease: (state, action) => {
            state.items = state.items.map(item => {
                // Checking if the currecnt element is the one on hwihc hte acion was performed on the UI
                if(item.id === action.payload){
                    return { ...item, amount: item.amount-1 };
                }
                return item;
            })
            .filter(item => item.amount !== 0); /* This removes(filters) the item from the cart when 
            decreasing the the quantity from 1 to 0 */
        },
        remove: (state, action) => { state.items = state.items.filter(item => item.id !== action.payload) }, 
        clearCart: state => state.items = [],
        getCartItems: state => state.items=data
    },
});

export const { getCartTotal, increase, remove, decrease, clearCart, getCartItems } = cartSlice.actions;

export default cartSlice.reducers;