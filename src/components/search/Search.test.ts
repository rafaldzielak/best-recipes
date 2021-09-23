import userEvent from "@testing-library/user-event";
import { screen, wrapWithRouter } from "../../utils/testUtils";
import Search from "./Search";
import { render } from "@testing-library/react";

test("placeholder shows on element entry and text enters properly", () => {
  render(wrapWithRouter(Search));
  const input = screen.getByPlaceholderText(/search for recipe/i) as HTMLInputElement;
  userEvent.type(input, "a");
  expect(input.value).toEqual("a");
  userEvent.type(input, "b");
  expect(input.value).toEqual("ab");
  screen.getByTitle("search-icon");
});
