import ShopActionsType from "./shop.types";

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
