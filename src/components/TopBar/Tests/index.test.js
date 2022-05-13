import React from "react";
import {render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TopBar from "../index";

describe("Topbar tests", () =>{
  test("language value when clicked", () => {  
    const changeLanguage = jest.fn();
    render(<BrowserRouter><TopBar /></BrowserRouter>);
    fireEvent.click(document.querySelector('#basic-nav-dropdown'));
    expect(changeLanguage).toHaveBeenCalledTimes(0);
    fireEvent.click(document.querySelector('#english'));
    fireEvent.click(document.querySelector('#german'));
  });
});

