import React, { useEffect, useState } from 'react'
import { MENU_LINK } from './constant';

const useRestaurantMenu = (resId) => {
const [resMenu,setresMenu]=useState(null);

console.log("hook")
    useEffect(()=>{
fetchApi();
    },[])
    const fetchApi=async()=>{
        const data=await fetch(MENU_LINK+resId);
        const json=await data.json()
        setresMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
      
    }
  return resMenu
}

export default useRestaurantMenu
