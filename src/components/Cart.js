import React from "react";
import Cartitems from "./Cartitems";
import { connect } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../action";

const Cart = ({ cart = [], total, dispatch }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  });
  if (cart.length === 0) {
    return (
      <section className="container">
        <h2>Your bag is empty</h2>
      </section>
    );
  }
  return (
    <section>
      <div>
        {cart.map((item) => {
          return <Cartitems key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total =<span>{total}</span>
          </h4>
        </div>
      </footer>
      <button onClick={() => dispatch({ type: CLEAR_CART })}>CLEAR CART</button>
    </section>
  );
};
function mapStateToProps(store) {
  //  one way this
  // return { cart: store.cart, total: store.total };
  // another way this
  const { cart, total } = store;
  return { cart, total };
}

export default connect(mapStateToProps)(Cart);
