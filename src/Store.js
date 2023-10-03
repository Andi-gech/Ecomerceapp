import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartReducer"; // Create this reducer as shown in the previous response.

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
