import { configureStore } from "@reduxjs/toolkit";
import {shopReducer} from "./slices/shop";



export default configureStore({
    reducer: {
        shop: shopReducer,
    },
});