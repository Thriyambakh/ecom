import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "Shoes", price: 120 },
    { id: 2, name: "T-Shirt", price: 40 },
    { id: 3, name: "Headphones", price: 90 },
  ],
  wishlist: [],
  orders: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    placeOrder: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const { addToWishlist, placeOrder } = shopSlice.actions;
export default shopSlice.reducer;
