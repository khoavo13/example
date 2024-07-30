import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productList: [
    { id: 1, name: "Le Tho", checked: false },
    { id: 2, name: "Le Meo", checked: false },
    { id: 3, name: "Le Nai", checked: false },
    { id: 4, name: "Le Gau", checked: false },
  ],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    rechecked(state, action) {
      state.productList = state.productList.map((item) =>
        item.id == action.payload ? { ...item, checked: !item.checked } : item
      );
    },
    deleteProduct(state, action) {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
    },
    addNewProduct(state, action) {
      let maxId = state.productList.reduce(
        (current, item) => Math.max(current, item.id),
        0
      );
      state.productList = [
        ...state.productList,
        {
          id: state.productList.length === 0 ? 1 : maxId + 1,
          name: action.payload,
          checked: false,
        },
      ];
    },
    rename(state, action) {
      state.productList = state.productList.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );
    },
  },
});
export const { rechecked, deleteProduct, addNewProduct, rename } =
  productSlice.actions;
export default productSlice.reducer;
