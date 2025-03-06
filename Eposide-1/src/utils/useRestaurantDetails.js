import React from 'react'
import { useState ,useEffect} from 'react';
import { MENU_LINK } from './constant';
const useRestaurantDetails = (resId) => {
    const [resDetails,setresDetails]=useState(null);
     useEffect(()=>{
    fetchApi2();
        },[])
        const fetchApi2=async()=>{
            const data=await fetch(MENU_LINK+resId);
            const json=await data.json()
            
           setresDetails(json?.data?.cards[2]?.card?.card)
        }
  return resDetails
}

export default useRestaurantDetails
