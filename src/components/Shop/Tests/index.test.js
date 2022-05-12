import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "../index";

describe("Shop  page tests", () =>{
  test("Shop renders", () => {
      const addTocart = jest.fn();
      const onSubmit = jest.fn();
      render(<BrowserRouter><Shop /></BrowserRouter>);
      fireEvent.click(screen.getByText(/Search/i));
      expect(onSubmit).toHaveBeenCalledTimes(0);
      expect(addTocart).toHaveBeenCalledTimes(0);
  });
})

