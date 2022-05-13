import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Order from "../index";

describe("Order  page tests", () =>{
  const handleSubmit = jest.fn();
  const successResult = [{
    id: 1,
    title: 'item',
    quantity : 2,
    description : 'item description'
  }];
  const fetchData = jest.fn(() => Promise.resolve(successResult));

  test("Order render", () => {  
    const { getByText, getByTestId } = render(<BrowserRouter><Order /></BrowserRouter>);
    const parent = getByTestId('parent');
    fireEvent.click(document.querySelector('#submit'));
    expect(handleSubmit).toHaveBeenCalledTimes(0);
    expect(getByText(/email/i)).toBeInTheDocument();
  });
  test("Order data", async () => {  
    render(<BrowserRouter><Order /></BrowserRouter>);
    await waitFor(() => fetchData);
  });
})

