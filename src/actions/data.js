import {
  UPDATE_POSTS,
  ADD_CART,
  INC_QTY,
  DEC_QTY,
  REMOVE_PRODUCT,
  ADD_WISHLIST,
  REVIEW_PRODUCT,
  REMOVE_WISH,
} from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url = "https://my-json-server.typicode.com/Richa-Y/ecomerse/posts";

    fetch(url)
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("dress data", data);
        dispatch(updatePosts(data));
      });
  };
}
export function updatePosts(product) {
  return {
    type: UPDATE_POSTS,
    product,
  };
}
export function addCart(product) {
  return {
    type: ADD_CART,
    product,
  };
}
export function increaseQty(product) {
  return {
    type: INC_QTY,
    product,
  };
}
export function decreaseQty(product) {
  return {
    type: DEC_QTY,
    product,
  };
}
export function removeProduct(product) {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
}
export function addtoWishlist(product) {
  return {
    type: ADD_WISHLIST,
    product,
  };
}
export function reviewProduct(review) {
  return {
    type: REVIEW_PRODUCT,
    review,
  };
}
export function removeWish(product) {
  return {
    type: REMOVE_WISH,
    product,
  };
}
