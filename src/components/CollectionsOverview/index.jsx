import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
