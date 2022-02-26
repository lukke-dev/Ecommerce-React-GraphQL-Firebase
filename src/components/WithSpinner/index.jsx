import React from "react";
import Spinner from "../Spinner";

const WithSpinner =
  (WrappedComponent) =>
  // eslint-disable-next-line react/display-name
  ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
