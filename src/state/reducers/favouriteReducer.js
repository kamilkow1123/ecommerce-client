import { ADD_PRODUCT_TO_FAV, REMOVE_PRODUCT_FROM_FAV } from "../actions/types";

const INITIAL_STATE = {
  favouriteProductsIds:
    JSON.parse(localStorage.getItem("favouriteProductsIds")) || [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAV:
      let newIds = [...state.favouriteProductsIds, action.payload];
      localStorage.setItem("favouriteProductsIds", JSON.stringify(newIds));
      return {
        ...state,
        favouriteProductsIds: newIds,
      };
    case REMOVE_PRODUCT_FROM_FAV:
      localStorage.setItem(
        "favouriteProductsIds",
        JSON.stringify(
          state.favouriteProductsIds.filter(
            (postId) => postId !== action.payload
          )
        )
      );
      return {
        ...state,
        favouriteProductsIds: state.favouriteProductsIds.filter(
          (postId) => postId !== action.payload
        ),
      };
    default:
      return state;
  }
};
