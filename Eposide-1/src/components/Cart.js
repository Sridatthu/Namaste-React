import React from "react";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold text-gray-800">🛒 Your Cart</h1>
      </div>

      <div className="max-w-lg mx-auto bg-white p-5 rounded-lg shadow-lg">
        {cartItems.length === 0 ? (
          <h1 className="text-lg font-medium text-gray-600 text-center">
            Cart is empty, please add items!
          </h1>
        ) : (
          <>
            <button
              className="w-full text-white bg-red-500 hover:bg-red-600 py-2 rounded-lg transition duration-200"
              onClick={handleClearCart}
            >
              🗑 Clear Cart
            </button>

            <div className="mt-4">
              <ItemCard list={cartItems} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

// import React from 'react'
// import ItemCard from './ItemCard'
// import { useDispatch, useSelector } from 'react-redux'
// import ListMenu from './ListMenu';
// import { clearCart } from '../utils/cartSlice';

// const Cart = () => {
   
//     const cartItems=useSelector((store)=>store.cart.items);
//     console.log("cart")
//     const dispatch=useDispatch()
// const handleClearCart=()=>{
//     dispatch(clearCart())
// }
//     console.log(cartItems)
//   return (
//     <div>
//     <div className='text-center p-4 m-4'>
//     <h1 className='text-xl font-bold'>Cart</h1>
    
//       <div className='w-6/12 m-auto '>
//       <button className='text-white bg-black p-2 m-2 rounded-xl  cursor-pointer' onClick={handleClearCart}>clear cart</button>
// {cartItems.length===0 && <h1 className='text-xl font-medium'>Cart is empty ,please add items</h1>}
     
//       </div>
//     </div>
//     <div className='w-6/12 m-auto'>
//         <ItemCard list={cartItems}/>
//     </div>
//     </div>
//   )
// }

// export default Cart
