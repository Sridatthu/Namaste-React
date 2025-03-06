import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
describe("Contact us page test cases",()=>{
    it('should first checking header is render or not', () => { 
        render(<Contact/>)
        //Querying
        const heading=screen.getByRole("heading")
        //Assertion
        expect(heading).toBeInTheDocument();
    })
    it("should is checking for input place holder",()=>{
        render(<Contact/>)
            const inputbox=screen.getByPlaceholderText("userName")
            expect(inputbox).toBeInTheDocument()
        
    })
    it("should is checking for inputs",()=>{
        render(<Contact/>)
            const inputs=screen.getAllByRole("textbox")
           expect(inputs.length).toBe(2)
        
    })
    it("should is checking for button",()=>{
        render(<Contact/>)
            const button=screen.getByRole("button")
            expect(button).toBeInTheDocument()
        
    })
    
})
