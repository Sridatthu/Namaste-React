import React from "react";
import ItemCard from "./ItemCard";

const ListMenu = ({ menuRes, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="border border-gray-300 bg-amber-100 w-6/12 mx-auto my-3 rounded-xl shadow-md hover:shadow-lg transition">
      {/* Header Section */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-amber-300 transition rounded-t-xl"
        onClick={handleClick}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {menuRes.title} ({menuRes.itemCards.length})
        </h2>
        <span className="text-2xl transform transition-transform duration-200">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {/* Item List - Conditional Rendering */}
      {showItems && (
        <div className="w-5/6 mx-auto p-2">
          <ItemCard list={menuRes.itemCards} />
        </div>
      )}
    </div>
  );
};

export default ListMenu;



// import React, { useState } from 'react'
// import ItemCard from './ItemCard';
// const ListMenu = ({ menuRes, showItems, setShowIndex}) => {
 
//     const handleClick = () => {
//       setShowIndex();
//     };
//     // console.log(see)
//   return (
//     <div className='border-2 bg-amber-200 w-6/12 m-auto my-3 rounded-xl'>
//         <div className='flex justify-between m-4 cursor-pointer' onClick={handleClick}> 
//             <div className='mx-2 text-2xl font-bold'>
//                 {menuRes.title}({menuRes.itemCards.length})
//            </div>
//            <div className='mx-2 text-2xl'>
//             ⬇
//            </div>
//         </div>
//         <div className='w-5/6 mx-auto'>{showItems &&
//               <ItemCard list={menuRes.itemCards}/>}
//               </div>
          
//     </div>
//   )
// }

// export default ListMenu
