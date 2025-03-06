import CardComponent, { withPromotedLabel } from "./CardComponent";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import UserContext from "../utils/useContext";

const Body = () => {
  const [listRes, setlistRes] = useState([]);
  const [filterlistRes, setfilterlistRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.7488379&lng=78.00351719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterlistRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // if(listRes.length===0){
    //   setlistRes(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setfilterlistRes(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
    // if(listRes.length===0){
    //   setlistRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setfilterlistRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }
  };

  const { LoggedInUser, setuserName } = useContext(UserContext);
  CardComponentPromoted = withPromotedLabel(CardComponent);

  if (useOnlineStatus() === false) return <h1 className="text-center text-xl font-semibold text-red-600">Oops! You are offline.</h1>;

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      {/* Search & Filter Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-xl px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-orange-400 transition"
          data-testid="searchInput"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition"
          onClick={() => {
            const result = listRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterlistRes(result);
          }}
        >
          Search
        </button>
      </div>

      {/* Top Rated Filter */}
      <div className="flex justify-center mb-6">
        <button
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-xl shadow-md hover:bg-green-600 transition"
          onClick={() => {
            const update = listRes.filter((res) => res.info.avgRating > 4.2);
            setlistRes(update);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* User Input */}
      <div className="flex justify-center mb-6">
        <input
          className="px-4 py-2 border border-gray-400 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 transition"
          value={LoggedInUser}
          onChange={(e) => setuserName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filterlistRes.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="hover:scale-105 transition-transform">
            {restaurant.info.isOpen ? (
              <CardComponentPromoted resData={restaurant} />
            ) : (
              <CardComponent resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
