import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import CartReducer from "./slices/CartSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({ 
    cart: CartReducer
});

const persistedReducer = persistReducer( persistConfig, reducer );

const store = configureStore({
    reducer: persistedReducer
});

export default store;