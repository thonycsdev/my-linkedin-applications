import Home from "@/pages";
import { describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
describe("Should pass", () => {
  render(<Home />);
  test("Should pass", () => {
    const anthony = screen.getByText("Anthony");
    expect(anthony).toBeInTheDocument();
  });
});
