import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Auth.slice";
import cartSlice from "./Cart.slice";

const reducers = combineReducers({
    auth: AuthSlice,
    cart: cartSlice,
});
export default reducers;