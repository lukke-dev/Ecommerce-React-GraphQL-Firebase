import React from "react";
import CustomButton from "../CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import "./style.scss";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => dispatch(addItem(item))}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
