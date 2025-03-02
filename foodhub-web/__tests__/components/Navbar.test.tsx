import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomNavbar from "@/app/sections/Navbar";

describe("CustomNavbar", () => {
  it("renders the navbar", () => {
    render(<CustomNavbar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("changes background on scroll", async () => {
    render(<CustomNavbar />); 
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toHaveClass("bg-transparent");
  
    fireEvent.scroll(window, { target: { scrollY: 100 } });
  
    await waitFor(() => {
      expect(navbar).toHaveClass("bg-white");
    });
  });
});