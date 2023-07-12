import "./body.css";
import Search from "./Search.js";
import { Search } from "./Search.js";
import RestrauntCard from "./RestrauntCard";
import { RestrauntList } from "./config.js";
import { useState } from "react";

const Body = () => {
  const [allRrestorants, setAllRrestorants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(RestrauntList);

  return (
    <>
      <Search
        setFilteredRestaurants={setFilteredRestaurants}
        allRrestorants={allRrestorants}
        setAllRrestorants={setAllRrestorants}
      />
      <div className="restraunt-body">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={restaurant.info.resId} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
