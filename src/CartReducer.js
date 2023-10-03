import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      // Add an item to the cart
      state.push(action.payload);
      // Save the updated cart to localStorage
      saveCartToLocalStorage(state);
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      const indexToRemove = state.findIndex((item) => item.id === id);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1); // Remove one item at the specified index
        // Save the updated cart to localStorage
        saveCartToLocalStorage(state);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        // Save the updated cart to localStorage
        saveCartToLocalStorage(state);
      }
    },
    clearCart: (state) => {
      // Clear the entire cart
      // Save an empty array to localStorage
      saveCartToLocalStorage([]);
      return [];
    },
  },
});

// Function to save the cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
