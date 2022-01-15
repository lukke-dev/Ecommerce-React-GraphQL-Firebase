import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";
import * as S from "./styles";

const CollectionPage = ({ collection }) => {
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
