import { fireEvent, render ,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("should render header component button",()=>{
render(
    <BrowserRouter>
    <Provider store={appStore}>
         <Header/>
    </Provider>
    </BrowserRouter>
)
const button=screen.getByRole("button",{name:"Login"})
//const button=screen.getByText("Login")
expect(button).toBeInTheDocument()
} )



it("should render header component cart 0 item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
             <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cartItem=screen.getByText("CART - 0")
    expect(cartItem).toBeInTheDocument()
    } )

    it("should render header component cart",()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
                 <Header/>
            </Provider>
            </BrowserRouter>
        )
        const cartItem=screen.getByText(/CART/)
        expect(cartItem).toBeInTheDocument()
        } );
        
it("should render header component login on click logout",()=>{
            render(
                <BrowserRouter>
                <Provider store={appStore}>
                     <Header/>
                </Provider>
                </BrowserRouter>
            )
         const loginButton=screen.getByRole("button",{name:"Login"})
         fireEvent.click(loginButton)
         const logoutButton=screen.getByRole("button",{name:"Logout"})
         expect(logoutButton).toBeInTheDocument()
            } );
        