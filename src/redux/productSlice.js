import { createSlice } from "@reduxjs/toolkit";
let initialState={}
if (localStorage.getItem("product")){
  initialState = JSON.parse(localStorage.getItem("product"))
}
else {
  initialState = {
    productList: [
      { id: 1, name: "Le Tho", checked: false },
      { id: 2, name: "Le Meo", checked: false },
      { id: 3, name: "Le Nai", checked: false },
      { id: 4, name: "Le Gau", checked: false },
    ],
    flagFilter: "",
    checkedAll: false,
  };
}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    rechecked(state, action) {
      state.productList = state.productList.map((item) => 
        item.id == action.payload ? { ...item, checked: !item.checked } : item
      )
      localStorage.setItem("product", JSON.stringify(state))
    },
    deleteProduct(state, action) {
      state.productList = state.productList.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("product", JSON.stringify(state))
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
      localStorage.setItem("product", JSON.stringify(state))
    },
    rename(state, action) {
      state.productList = state.productList.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name }
          : item
      );
      localStorage.setItem("product", JSON.stringify(state))
    },
    deleteCheckedAll(state) {
      state.productList = state.productList.filter((item) => !item.checked);
      if (state.productList.length < 1) {
        state.checkedAll = false;
      }
      localStorage.setItem("product", JSON.stringify(state))
    },
    isCheckedAll(state) {
      let noCheckedAll = false;
      state.productList.map((item) => {
        if (item.checked) {
          noCheckedAll = true;
        } 
        else noCheckedAll = false;
      });

      state.checkedAll = noCheckedAll;
      localStorage.setItem("product", JSON.stringify(state))
    },
    setFlagFilter(state, action) {
      state.flagFilter = action.payload;
      localStorage.setItem("product", JSON.stringify(state))
    },
    setCheckedAll(state, action) {
      state.checkedAll = action.payload;
      if (state.productList.length < 1) {
        state.checkedAll = false;
      } else
        state.productList = state.productList.map((item) => ({
          ...item,
          checked: state.checkedAll,
        }));

        localStorage.setItem("product", JSON.stringify(state))
    },
  },
});
export const {
  rechecked,
  deleteProduct,
  addNewProduct,
  rename,
  deleteCheckedAll,
  setFlagFilter,
  setCheckedAll,
  isCheckedAll,
} = productSlice.actions;
export default productSlice.reducer;