import { fireEvent, render ,screen} from "@testing-library/react"
import CardComponent from "../CardComponent"
import mockdata from "../MOCK_DATA/resCard.json"
import "@testing-library/jest-dom"

it("should render the card component in menu",()=>{
render(<CardComponent resData={mockdata} />)
const name=screen.getByText( "Sri Guru Prasad Udipi ...")
expect(name).toBeInTheDocument()
})
