import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/CollectionItem";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../redux/shop/shop.selectors";
import * as S from "./styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <S.CollectionContainer>
      <S.Title>{title}</S.Title>
      <S.ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </S.ItemsContainer>
    </S.CollectionContainer>
  );
};

export default CollectionPage;
