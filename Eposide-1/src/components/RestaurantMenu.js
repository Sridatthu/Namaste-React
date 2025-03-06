import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ListMenu from "./ListMenu";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantMenu = () => {
  console.log("parent");

  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const resDetails = useRestaurantDetails(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resMenu || !resDetails) return <Shimmer />;

  const menu = resMenu.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="container mx-auto p-4">
      {/* Restaurant Info Section */}
      <div className="border border-gray-300 bg-white rounded-xl p-4 w-7/12 mx-auto flex flex-col md:flex-row justify-between gap-6 shadow-md hover:shadow-lg transition">
        {/* Restaurant Details */}
        <div className="md:w-4/6 p-3">
          <h1 className="text-2xl font-bold">
            {resDetails.info.name}{" "}
            <span className="font-medium text-xl text-gray-600">
              {resDetails.info.costForTwoMessage}
            </span>
          </h1>
          <p className="text-lg font-medium text-gray-700">
            ⭐ RATING: {resDetails.info.avgRatingString}
          </p>
          <p className="text-lg font-medium text-gray-700">
            🚀 DELIVERY TIME: {resDetails.info.sla.slaString}
          </p>
          <p className="text-lg font-medium text-gray-700">
            📍 LOCATION: {resDetails.info.city}
          </p>
        </div>

        {/* Restaurant Image */}
        <div className="md:w-2/6 flex justify-center">
          <img
            className="w-48 md:w-56 rounded-xl shadow-md"
            src={CDN_LINK + resDetails.info.cloudinaryImageId}
            alt={resDetails.info.name}
          />
        </div>
      </div>

      {/* Menu Items Section */}
      <div className="mt-6">
        {menu.map((men, index) => (
          <ListMenu
            key={men?.card?.card.title}
            menuRes={men?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;


// import React, { useEffect, useState } from 'react'
// import Shimmer from './Shimmer'
// import { CDN_LINK, MENU_LINK } from '../utils/constant'
// import { useParams } from 'react-router-dom'
// import useRestaurantMenu from '../utils/useRestaurantMenu'
// import ListMenu from './ListMenu'
// import useRestaurantDetails from '../utils/useRestaurantDetails'
// const RestaurantMenu = () => {
//   console.log("parent")

//     const {resId}=useParams()

  
//   const resMenu=useRestaurantMenu(resId);
//   const resDetails=useRestaurantDetails(resId);
//   // console.log(resMenu)
//   const [showIndex, setShowIndex] = useState(null);

//     if(resMenu===null || resDetails===null) return <Shimmer/>

//     const menu=resMenu.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// //     console.log(resDetails)
// // console.log(menu)
//   return (
//     <div>
//       <div className='border-2 bg-white rounded-xl my-2 p-2 w-7/12 mx-auto flex justify-between gap-4'>
//       <div className='w-4/6 p-3'>
//       <div className='text-2xl font-bold'> {resDetails.info.name} <span className='font-medium text-xl text-gray-600'>{resDetails.info.costForTwoMessage}</span></div>
//      <div className='text-xl font-medium'>RATING : {resDetails.info.avgRatingString}</div>
//         <div className='text-xl font-medium'>DELIVERY TIME : {resDetails.info.sla.slaString}</div>
//         <div className='text-xl font-medium'>LOCATION : {resDetails.info.city}
//       </div>
//       </div>
//       <div className='w-2/6 '>
//        <img className='w-55 mx-auto rounded-xl' src={CDN_LINK+resDetails.info.cloudinaryImageId}></img> 
//       </div>
//       </div>
//        <div className='my-2'>
//         {
//           menu.map((men,index)=>(
//             <ListMenu  key={men?.card?.card.title}
//             menuRes={men?.card?.card}  showItems={index === showIndex ? true : false}
//             setShowIndex={() => setShowIndex(index)}/>
//           ))
//         }
     
//        </div>
//     </div>
//   )
// }

// export default RestaurantMenu
