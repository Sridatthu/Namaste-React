import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom"

import Header from "./components/Header";
import Body from  "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/useContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// import Grocery from "./components/Grocery";

const Application=()=>{
  const [userName,setuserName]=useState()
  useEffect(()=>{
const data={
  name:"datthu"
};
setuserName(data.name)
  },[]);
 return (<Provider store={appStore}>
 <UserContext.Provider value={{LoggedInUser:userName,setuserName}}  >
 <div>
    <Header/>
    <Outlet/>
  </div>
  </UserContext.Provider>
  </Provider>
  );

};
const Grocery=lazy(()=>import("./components/Grocery"))
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Application/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:(<Suspense fallback={<h1>LOADING....</h1>}><Grocery/></Suspense>),
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ],
    errorElement:<Error/>,
  },
])

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
