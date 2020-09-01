import React from "react";
import { connect } from "react-redux";
import { INCREASE, DECREASE, REMOVE } from "../action";

const Cartitems = ({
  colour,
  name,
  price,
  img,
  amount,
  remove,
  increase,
  decrease,
}) => {
  //remove,increaase,decrease is function
  return (
    <div className="container" style={{ margin: "10px" }}>
      <div className="cart-item" style={{ padding: "20px" }}>
        <img src={img} alt="no image" style={{ width: 100 }} />
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
          <h4>{colour}</h4>
        </div>
        <div>
          {/* increase amount */}
          <button className="bt" onClick={() => increase()}>
            +
          </button>
        </div>
        <div>
          <h4>{amount}</h4>
          <button onClick={() => remove()}>Remove</button>
        </div>
        <div>
          {/* decrease amount */}
          <button className="bt" onClick={() => decrease()}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch, ownprops) => {
  console.log(ownprops);
  const { id, amount } = ownprops; //id use for accessing unique id number
  return {
    //payload use for what value you need we can change its vlaue
    remove: () => dispatch({ type: REMOVE, payload: { id } }), //we use arrow function for invoke our props
    increase: () => dispatch({ type: INCREASE, payload: { id } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),
  };
};

export default connect(null, mapDispatchToProps)(Cartitems);
