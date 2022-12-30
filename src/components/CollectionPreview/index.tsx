import React from "react";
import "./style.scss";
import CollectionItem, { ItemProps } from "../CollectionItem";

type CollectionPreviewProps = {
  title: string;
  items: ItemProps[];
}

const CollectionPreview = ({ title, items }: CollectionPreviewProps) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
