import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from './User'
import UserClass from './UserClass'
// class About extends Component{
//   constructor(props){
// super(props)
// console.log("parent constructor")
//   }
//   componentDidMount(){
//     console.log("parent mounted")
//   }
//   render(){
//     console.log("parent rendered")
//     return(<>
//       <div >About us</div>
//       {/* <User name={"sri"}/> */}
//       <UserClass name={"1"}/>
//       {/* <UserClass name={"2"}/>
//       <UserClass name={"3"}/> */}
//       </>
      
//     )
//   }
// }
const About = () => {
  return (<div className="max-w-3xl mx-auto p-6 text-center">
    <h1 className="text-3xl font-bold text-orange-600 mb-4">About Us</h1>
    <p className="text-gray-700 text-lg">
      Welcome to <span className="font-semibold text-orange-500">FoodieExpress</span>, your go-to platform for quick and delicious meals! 
      We connect you with top restaurants, ensuring a smooth and hassle-free food ordering experience.
    </p>

    <h2 className="text-2xl font-semibold text-orange-500 mt-6">Why Choose Us?</h2>
    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
      <li>🔥 Wide range of restaurants & cuisines</li>
      <li>🚀 Fast and reliable delivery</li>
      <li>💳 Secure online payments</li>
      <li>📱 Easy-to-use app & website</li>
      <li>⭐ Customer satisfaction guaranteed</li>
    </ul>

    <h2 className="text-2xl font-semibold text-orange-500 mt-6">How It Works</h2>
    <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
      <li>Browse menus and choose your favorite dishes.</li>
      <li>Add items to your cart and proceed to checkout.</li>
      <li>Select a payment method and confirm your order.</li>
      <li>Track your order in real-time and enjoy your meal!</li>
    </ol>

    <div className="mt-6">
      <Link className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition" to="/">
        Order Now
      </Link>
    </div>
  </div>
  )
}
export default About
