import Navbar from "@/components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar Tests", () => {
  test("Navbar should render with all 3 avaiable itens when the user is logged in", () => {
    render(<Navbar isUserLoggedIn={true} />);
    var itens = screen.getAllByRole("listitem");
    //login, logo, applications, logout
    expect(itens.length).toBe(4);
  });

  test("Should show login button when the user is not authenticated", () => {
    render(<Navbar isUserLoggedIn={false} />);
    var loginItem = screen.getByText("Login");
    expect(loginItem).toBeInTheDocument();
  });

  test("Should show Logout and Applications buttons when the user is authenticated", () => {
    render(<Navbar isUserLoggedIn={true} />);
    var logoutItem = screen.getByText("Logout");
    var applicationsItem = screen.getByText("Applications");

    expect(logoutItem).toBeInTheDocument();
    expect(applicationsItem).toBeInTheDocument();
  });
});
