import React from "react";
import UserContext from "../utils/useContext";
class UserClass extends React.Component{
constructor(props){
    super(props)
    this.state={
        user:{
name:"dummy"
        }
    };
}
async componentDidMount(){
    const data= await fetch("https://api.github.com/users/Sridatthu")
    const info=await data.json()
this.setState({
    user:{
        name:info.login
    }
})
    console.log(this.props.name +"child mounted")
}
componentWillUnmount(){
    console.log("component existed")
}
    render(){
    
        return(
            <div className="user">hello{
<UserContext.Consumer>
    {(data)=>(<h1>{data.LoggedInUser}</h1>)}
</UserContext.Consumer>}
    </div>
        )
    }
}
export default UserClass;
