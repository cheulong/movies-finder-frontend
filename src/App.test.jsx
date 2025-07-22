import { expect, test, describe } from "vitest";
import { render ,screen} from "@testing-library/react";
import App from "./App.jsx";

describe("renders the home page", () => {
  test("show the title", () => {
      render(<App />);
       expect(screen.getByText("Movies Finder"))
  });
});