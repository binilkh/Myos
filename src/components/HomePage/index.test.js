import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./index";

describe("Home  page tests", () =>{
  test("cart changes value when clicked", () => {  
      render(<BrowserRouter><HomePage /></BrowserRouter>);
      fireEvent.click(screen.getByTitle('shop'));
      fireEvent.click(screen.getByTitle('order'));
  });
})

