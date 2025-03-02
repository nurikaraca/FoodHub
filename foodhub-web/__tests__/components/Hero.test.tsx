import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/app/sections/Hero";

describe("Hero Section", () => {
  it("renders the Hero section correctly", () => {
    render(<Hero />);
    
  
    expect(screen.getByPlaceholderText("Enter delivery address")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Search here/i })).toBeInTheDocument();
  });

  it("allows user to type in the input field", () => {
    render(<Hero />);
    
    const input = screen.getByPlaceholderText("Enter delivery address");

   
    expect(input).toHaveValue("");

    
    fireEvent.change(input, { target: { value: "İstanbul, Türkiye" } });

    
    expect(input).toHaveValue("İstanbul, Türkiye");
  });


});
