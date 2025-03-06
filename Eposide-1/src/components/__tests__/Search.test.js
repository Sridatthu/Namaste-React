import { act } from "react";
import { fireEvent, getByText, render,screen } from "@testing-library/react"
import MOCK_DATA from "../MOCK_DATA/mockResList.json"
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });
  
it("should search for hotel ",async ()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    );

    const getAllCardsBefore=screen.getAllByTestId("resCard");
    expect(getAllCardsBefore.length).toBe(8)
    const  searchBtn=screen.getByRole("button",{name:"search"})
    const  searchInput=screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target:{value:"hotel"}});
    fireEvent.click(searchBtn)
    const getRescardAfter=screen.getAllByTestId("resCard");
    expect(getRescardAfter.length).toBe(3)

})
it("should search for hotel ",async ()=>{
    await act(async()=>
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
        )
    );

    const getAllCardsBefore=screen.getAllByTestId("resCard");
    expect(getAllCardsBefore.length).toBe(8)
    const button=screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(button)
    const getRescardAfter=screen.getAllByTestId("resCard");
    expect(getRescardAfter.length).toBe(8)

})
