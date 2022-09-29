/** @jest-environment jsdom */

import { render, screen } from "@testing-library/react";
import Home from "../pages/index.js";

describe("Button", () => {
  it("renders button without crashing", () => {
    const label = "test";

    render(<Home />);
    expect(screen.findByText("Unsere Vision"));
  });
});
