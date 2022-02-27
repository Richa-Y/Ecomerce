import {
  ADD_CART,
  UPDATE_POSTS,
  INC_QTY,
  DEC_QTY,
  REMOVE_PRODUCT,
  REVIEW_PRODUCT,
  ADD_WISHLIST,
  REMOVE_WISH,
} from "../actions/actionTypes";
const initialdata = {
  list: [],
  ShowCart: [],
  totalPrice: 0,
  WishList: [],
  review: [],
};

export default function data(state = initialdata, action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        list: action.product,
      };
    case REVIEW_PRODUCT:
      return {
        ...state,
        review: [...state.review, action.review],
      };
    case ADD_CART:
      // return {
      //   ...state,
      //   ShowCart: [action.product, ...state.ShowCart],
      //   totalPrice: state.totalPrice + 1,
      // };
      const check = state.ShowCart.find(
        (product) => product.id === action.product.id
      );
      // if (check) {
      //   return state;
      // }
      if (check) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          ShowCart: [action.product, ...state.ShowCart],
          totalPrice: state.totalPrice + 1,
          added: true,
        };
      }
    case INC_QTY:
      console.log(" action.product", action.product.Quantity + 1);
      console.log("second try", action.product);

      // let update = action.product;
      // update.Quantity = update.Quantity + 1;
      return {
        ...state,

        // qty: update.Quantity,

        // ShowCart: [...state.ShowCart],
        // totalPrice: state.totalPrice + 1,
      };
    case DEC_QTY:
      return {
        ...state,
      };
    case REMOVE_PRODUCT:
      const filteredArray = state.ShowCart.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        ShowCart: filteredArray,
        totalPrice: state.totalPrice - 1,
      };
    case ADD_WISHLIST:
      const newcheck = state.WishList.find(
        (product) => product.id === action.product.id
      );

      if (newcheck) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,

          WishList: [action.product, ...state.WishList],
        };
      }
    case REMOVE_WISH: {
      const filteredArray = state.WishList.filter(
        (product) => product.id !== action.product.id
      );
      const check = state.ShowCart.find(
        (product) => product.id === action.product.id
      );

      if (check) {
        return {
          ...state,
          WishList: filteredArray,
        };
      }

      return {
        ...state,
        ShowCart: [action.product, ...state.ShowCart],
        totalPrice: state.totalPrice + 1,
        WishList: filteredArray,
      };
    }
    // const index = state.WishList.indexOf(action.product);
    // if (index != -1 && newcheck) {
    //   return {
    //     isWish: true,
    //     ...state,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     isWish: false,
    //     WishList: [action.product, ...state.WishList],
    //   };
    // }

    // if (newcheck) {
    //   return {
    //     ...state,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     // ShowCart: [action.product, ...state.ShowCart],
    //     // totalPrice: state.totalPrice + 1,
    //     WishList: [action.product, ...state.WishList],
    //   };
    // }

    default:
      return state;
  }
}
