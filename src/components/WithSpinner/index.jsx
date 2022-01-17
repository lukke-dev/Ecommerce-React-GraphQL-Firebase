import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./styles";

const WithSpinner =
  (WrappedComponent) =>
  // eslint-disable-next-line react/display-name
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default WithSpinner;
