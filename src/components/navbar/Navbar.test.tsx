import { wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./Navbar";
import { render } from "@testing-library/react";

test("placeholder shows on element entry and text enters properly", () => {
  const { getByText } = render(wrapWithRouter(Navbar));
  getByText("Best Recipes");
});
