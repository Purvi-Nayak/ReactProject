import { configureStore } from "@reduxjs/toolkit";
import reducers from "./slices/index";


const store = configureStore({
    reducer: reducers,
    devTools: true
});

export default store;