import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../MOCK_DATA/mockResData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    })
  );
  it("should Load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );
  
    const accordionHeader = screen.getByText("South Indian(26)");
    fireEvent.click(accordionHeader);
  
    expect(screen.getAllByTestId("foodItems").length).toBe(26);
  
    expect(screen.getByText("CART - 0")).toBeInTheDocument();
  
    const addBtns = screen.getAllByRole("button", { name: "ADD+" });
    fireEvent.click(addBtns[0]);
  
    expect(screen.getByText("CART - 1")).toBeInTheDocument();
  
    fireEvent.click(addBtns[1]);
  
    expect(screen.getByText("CART - 2")).toBeInTheDocument();
  
    expect(screen.getAllByTestId("foodItems").length).toBe(28);
  
    fireEvent.click(screen.getByRole("button", { name: "clear cart" }));
  
    expect(screen.getAllByTestId("foodItems").length).toBe(26);
  
    expect(
      screen.getByText("Cart is empty ,please add items")
    ).toBeInTheDocument();
  });
