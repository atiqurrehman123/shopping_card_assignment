import { INCREASE, DECREASE, CLEAR_CART, REMOVE } from "./action";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === DECREASE) {
    // console.log("you decreased amount");
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter(
        (cartItems) => cartItems.id !== action.payload.id
      );
    } else {
      tempCart = state.cart.map((cartItems) => {
        if (cartItems.id === action.payload.id) {
          cartItems = { ...cartItems, amount: cartItems.amount - 1 };
        }
        return cartItems;
      });
    }
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === INCREASE) {
    // console.log("you increased amount");
    let tempCart = state.cart.map((cartvalue) => {
      if (cartvalue.id === action.payload.id) {
        cartvalue = { ...cartvalue, amount: cartvalue.amount + 1 };
        console.log(cartvalue);
      }
      return cartvalue;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === REMOVE) {
    // console.log(action.payload.id);
    return {
      ...state,
      cart: state.cart.filter(
        (cartvalue) => cartvalue.id !== action.payload.id
      ),
    };
  }
  return state;
}
export default reducer;
