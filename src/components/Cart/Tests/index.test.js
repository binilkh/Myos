import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { insertOrder } from "../../../services/itemService";
import Cart from "../index";

describe("cart tests", () =>{
  test("cart renders", () => {
    const addTocart = jest.fn();
    const removeCart = jest.fn();
    const confirmCheckout = jest.fn();
    const checkout = true;
    const cartItems =[{
      id: 1,
      title: 'item',
      quantity : 2,
      description : 'item description'
    }]
  
    render(<BrowserRouter><Cart  addTocart={addTocart} cartItems={cartItems}/></BrowserRouter>);
    fireEvent.click(screen.getByTitle('Delete'))
    expect(removeCart).toHaveBeenCalledTimes(0);
    expect(addTocart).toHaveBeenCalledTimes(1);
    fireEvent.click(screen.getByText(/Checkout/i));
    expect(confirmCheckout).toHaveBeenCalledTimes(0);
    expect(checkout).toEqual(true);
  });
  test("cart changes value when clicked", async () => {
    const ins = await insertOrder();
  })
})

