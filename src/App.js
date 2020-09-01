import React from "react";
import Cart from "./components/Cart.js";
import Filter from "./components/Filter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import data from "./data";

const initialStore = {
  cart: data,
  total: 104,
  amount: 0,
};

const store = createStore(reducer, initialStore);
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <br />
        <br />
        <h1>Shopping Card</h1>
        <br />
        <br />
        <Filter />
        <br />
        <Cart />

        <br />
        <br />
      </div>
    </Provider>
  );
}

export default App;
