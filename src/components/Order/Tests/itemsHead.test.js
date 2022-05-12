import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ItemsHead from "../itemsHead";

describe("Order page item head tests", () =>{
  const items =[{
    id: 1,
    title: 'item',
    quantity : 2,
    description : 'item description'
  }];
  const item = {
    id: 1,
    title: 'item',
    quantity : 2,
    description : 'item description'
  }
  const index = 0;
  test("Order page item head renders", () => {  
      render(<BrowserRouter><ItemsHead item={item} index={index}  key={index} items={items}/></BrowserRouter>);
  });
})

