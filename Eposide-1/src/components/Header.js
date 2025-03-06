import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { LoggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const online = useOnlineStatus();

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo Section */}
      <div>
        <img className="w-28 rounded-lg shadow-sm" src={LOGO_LINK} alt="logo" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center space-x-6 text-lg font-medium text-gray-700">
          <li className="hidden sm:block">{LoggedInUser}</li>
          <li className="hidden sm:block">
            Online: {online ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-orange-500 transition">Grocery</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="relative px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
              Cart 🛒
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
              onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;






// import { useContext, useState } from "react";
// import { LOGO_LINK } from "../utils/constant";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/useContext";
// import {useSelector} from "react-redux"

// const Header=()=>{
//   const [btnName,setbtnName]= useState("Login");
//   const data=useContext(UserContext)
//   // console.log(data);
//   const cartItems=useSelector((store)=>store.cart.items)
// const online=useOnlineStatus();
//  return (<div className="border-2 flex justify-between">
//     <div className="logo">
// <img  className="w-30" src={LOGO_LINK} alt="logo"></img>
//     </div>
//     <div className="">
//       <ul className="flex m-4 p-2">
//         <li className="mx-2 px-2 border-2 rounded-xl">{data.LoggedInUser}</li>
//         <li className="mx-2 px-2 border-2 rounded-xl">Online Status : {online ?"✅":"💔" }</li>
//         <li><Link to="/" className="mx-2 px-2 border-2 rounded-xl">HOME</Link></li>
//         <li><Link to="/about" className="mx-2 px-2 border-2 rounded-xl">ABOUT</Link></li>
//         <li><Link to="/contact" className="mx-2 px-2 border-2 rounded-xl">CONTACT</Link></li>
//         <li><Link to="/grocery" className="mx-2 px-2 border-2 rounded-xl">GROCERY</Link></li>
//         <li><Link to="/cart" className="mx-2 px-2 border-2 rounded-xl">CART - {cartItems.length}</Link></li>
//         <button className="mx-2 px-2 border-2 rounded-xl" onClick={()=>{
//           btnName==="Login"?setbtnName("Logout"):setbtnName("Login");
//         }}>{btnName}</button>
//       </ul> 

//     </div>

//   </div>)
// };

// export default Header;
