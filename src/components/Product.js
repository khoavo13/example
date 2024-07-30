import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input, ListGroup, ListGroupItem } from "reactstrap";
import "./product.css";
import { useDispatch } from "react-redux";
import { deleteProduct, rechecked, rename } from "../redux/productSlice";

export default function Product() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState();
  const [flag, setFlag] = useState(null)
  const handle_rechecked = (id) => {
    dispatch(rechecked(id));
  };
  const handle_delete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      <ListGroup className="product-list">
        {productList &&
          productList.map((item, index) => (
            <ListGroupItem key={index} className="product-item">
              <Input
                type="checkbox"
                checked={item.checked}
                onChange={() => handle_rechecked(item.id)}
              />
              {isEdit && flag == item.name ? (
                <Input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key == "Enter") {
                      dispatch(rename({ id: item.id, name: text }));
                      setIsEdit(false);
                      setText("")
                      setFlag(null)
                    }
                  }}
                />
              ) : (
                <div
                  className={
                    item.checked ? "product-name active" : "product-name"
                  }
                >
                  <p
                    onDoubleClick={() => {
                      setIsEdit(true);
                      setText(item.name);
                      setFlag(item.name)
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              )}

              <Button color="danger" onClick={() => handle_delete(item.id)}>
                Delete
              </Button>
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
