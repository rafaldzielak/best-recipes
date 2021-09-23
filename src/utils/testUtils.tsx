import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export const wrapWithRouter = (Component: React.FC<any>, props?: {}): JSX.Element => {
  return (
    <Router>
      <Component {...props} />
    </Router>
  );
};

export * from "@testing-library/react";
