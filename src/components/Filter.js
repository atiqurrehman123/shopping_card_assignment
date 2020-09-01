import React from "react";
import { connect } from "react-redux";

function filter({ amount }) {
  return (
    <div className="row">
      <div className="col-sm">Filter</div>
      <p>{amount}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    amount: state.amount,
  };
};

export default connect(mapStateToProps)(filter);
