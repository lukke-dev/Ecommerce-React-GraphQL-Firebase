import React from "react";
import { ItemProps } from "../CollectionItem";
import "./styles.scss";

type CartItemProps = {
  item: ItemProps;
}

const CartItem = ({ item: { imageUrl, price, name, quantity } }: CartItemProps) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
