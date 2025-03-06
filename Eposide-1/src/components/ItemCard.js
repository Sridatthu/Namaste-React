import React from "react";
import { CDN_LINK } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCard = ({ list }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {list.map((item) => (
        <div
          className="border border-gray-300 flex justify-between p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition"
          data-testid="foodItems"
          key={item.card.info.id}
        >
          {/* Left Side - Item Details */}
          <div className="w-7/10">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.card.info.name} - ₹{item.card.info.price / 100}
            </h3>
            <p className="text-sm text-gray-600">{item.card.info.description}</p>
          </div>

          {/* Right Side - Image & Button */}
          <div className="w-3/10 flex flex-col items-center justify-between">
            {item.card.info.imageId && (
              <img
                className="w-24 h-24 rounded-lg object-cover"
                src={CDN_LINK + item.card.info.imageId}
                alt={item.card.info.name}
              />
            )}
            <button
              className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;



// import React from 'react'
// import { CDN_LINK } from '../utils/constant'
// import { useDispatch } from 'react-redux'
// import { addItem } from '../utils/cartSlice';

// const ItemCard = ({list}) => {
//   console.log("cart");
  
//      console.log(list);
    
//     const dispatch=useDispatch();
   
//     const handleAddItem=(item)=>{
//       dispatch(addItem(item))
//     }
//     //res.card.info
//   return (<div>
//     {list.map((item)=>(
//        <div className='border-2 flex justify-between m-2 rounded-xl bg-white' data-testid="foodItems"
//        key={item.card.info.id}
// >
//        <div className='m-2 w-7/10'>
//          <div className='p-1 m-1 font-bold text-xl'>{item.card.info.name}-RS {item.card.info.price/100}</div>
//           <div className="p-1 m-1 text-justify">{item.card.info.description}</div> 
//        </div>
       
     
//        <div className='m-2 p-4 w-3/10 relative'>{
//          item.card.info.imageId?(  <img className="w-30 h-25 rounded-xl"src={CDN_LINK+item.card.info.imageId }></img> ):(<></>)
//        }<button className='absolute bottom-2 right-20 border-2 rounded-xl bg-green-500 text-white px-3 py-2 cursor-pointer'  onClick={()=>handleAddItem(item)}>ADD+</button>
         
//        </div>
//    </div>
//     ))}
//   </div>
   
//   )
// }

// export default ItemCard
