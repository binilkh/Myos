import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Item from "../item";
describe("Order  item tests", () =>{
  test("Order  item renders", () => {  
      render(<BrowserRouter><Item /></BrowserRouter>);
  });
})

