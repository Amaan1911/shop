import { createSlice, createSelector } from "@reduxjs/toolkit";

// Cart item shape:
// { id: number|string, name: string, priceNumber: number, img: string, qty: number }

// Load cart from localStorage if exists
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  items: loadCart(),
};

function findItemIndex(items, id) {
  return items.findIndex((it) => String(it.id) === String(id));
}

const saveCart = (items) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, priceNumber, img, qty = 1 } = action.payload;
      const index = findItemIndex(state.items, id);
      if (index >= 0) {
        state.items[index].qty += qty;
      } else {
        state.items.push({ id, name, priceNumber, img, qty });
      }
      saveCart(state.items); // update localStorage
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((it) => String(it.id) !== String(id));
      saveCart(state.items);
    },
    increaseQty: (state, action) => {
      const id = action.payload;
      const index = findItemIndex(state.items, id);
      if (index >= 0) state.items[index].qty += 1;
      saveCart(state.items);
    },
    decreaseQty: (state, action) => {
      const id = action.payload;
      const index = findItemIndex(state.items, id);
      if (index >= 0 && state.items[index].qty > 1) state.items[index].qty -= 1;
      saveCart(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCart(state.items);
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.qty, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.priceNumber * it.qty, 0)
);
