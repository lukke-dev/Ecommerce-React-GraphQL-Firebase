import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import ColletionsOverviewContainer from "../../components/CollectionsOverviewContainer";
import CollectionPageContainer from "../../components/CollectionPageContainer";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={ColletionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default ShopPage;
