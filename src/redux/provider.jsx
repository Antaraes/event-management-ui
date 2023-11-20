import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

// eslint-disable-next-line react/prop-types
const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
