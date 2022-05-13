import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Items from "../items";

describe("Shop items  page tests", () =>{
  const index = 0;
  const item = {
    id: 1,
    title: 'item',
    quantity : 2,
    description : 'item description'
  };
  const addTocart = jest.fn();
  const handleSubmit = jest.fn();
  const decNum = jest.fn();
  const incNum = jest.fn();
  const handleChange = jest.fn();
  const cart = [{
    id: 1,
    title: 'item',
    quantity : 2,
    description : 'item description'
  }];
  test("Shop items render", () => {  
      render(<BrowserRouter><Items item={item} key={index} index={index} addTocart={addTocart} cartItems={cart}/></BrowserRouter>);
      fireEvent.click(document.querySelector('#addToCart'));
      expect(handleSubmit).toHaveBeenCalledTimes(0);
      expect(addTocart).toHaveBeenCalledTimes(1);
      fireEvent.click(document.querySelector('#inc'));
      expect(incNum).toHaveBeenCalledTimes(0);
      fireEvent.click(document.querySelector('#dec'));
      expect(decNum).toHaveBeenCalledTimes(0);
      expect(document.querySelector('#form1')).toBeInTheDocument();
      fireEvent.change(document.querySelector('#form1'));
      expect(handleChange).toHaveBeenCalledTimes(0);
    });
  
})

