import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { addNewProduct, isCheckedAll, setCheckedAll } from "../redux/productSlice";
import "./addProduct.css";

export default function AddProduct() {
  const [text, setText] = useState("");
  const { checkedAll } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handle_checked_all = ()=>{
    dispatch(setCheckedAll(!checkedAll))
  }
  return (
    <div>
      <Input
        type="text"
        value={text}
        placeholder="Enter your name"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(addNewProduct(text));
            dispatch(isCheckedAll())
            setText("");
          }
        }}
      />
      <div className="checked-all">
        <Input
          type="checkbox"
          checked={checkedAll}
          onChange={handle_checked_all }
        />
        <p>Check All</p>
      </div>
    </div>
  );
}
