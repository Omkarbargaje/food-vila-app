import "./search.css";
import { RestrauntList } from "./config.js";
import { useState, useEffect } from "react";

export function filterData(input, restaurants) {
  const filterdData = restaurants.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(input?.toLowerCase())
  );

  return filterdData;
}

export function Search({
  setFilteredRestaurants,
  allRrestorants,
  setAllRrestorants,
}) {
  const [input, setInput] = useState("");

  // if we want to do an api call we have to use use effect but currently we are not doing any api call

  useEffect(() => {
    // "If you want to do an Api call do here"

    // getRestaurants();
    // getData();

    const data = RestrauntList;
    setAllRrestorants(data);
    setFilteredRestaurants(data); // after comiiting this all the code is giving us requred output pls check why it is happning
    console.log(data);
  }, []);

  /*
wrote this for fetching a data of zomato but zomato not giving a permmission to use this api


 async function getRestaurants(){
    const data=await fetch("https://www.zomato.com/webroutes/search/home");
    const json=await data.json();

    console.log(json);
  }

*/

  //1st way to fetch a data
  /*
async function getRestaurants(){
    const data=await fetch("https://www.eatsure.com/v1/api/get_restaurants?");          // used eatsure API it is working
    const json=await data.json();

    console.log(json);
  }
*/

  //2nd way to fetch a data

  /*
 function getData() {
    const url = "https://www.eatsure.com/v1/api/get_restaurants?";        // used eatsure API it is working

   
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("GET response:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  
  getData();
*/

  return (
    <div className="SearchBar">
      {/* <SearchIcon/> */}
      <input
        type="text"
        className="searchInput"
        value={input}
        placeholder="Search"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="searchBtn"
        type="submit"
        onClick={() => {
          const data = filterData(input, allRrestorants);

          setFilteredRestaurants(data);

          console.log(data);
        }}
      >
        Search
      </button>
    </div>
  );
}
