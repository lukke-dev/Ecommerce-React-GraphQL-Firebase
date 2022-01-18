import ShopActionsType from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshopToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionsType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (colletionsMap) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_SUCCESS,
  payload: colletionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
