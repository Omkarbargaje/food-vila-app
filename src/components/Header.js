import "./header.css";

import { useState } from "react";


const Title = () => (
    <div className="logo">
      <a href="/">
        {" "}
        {/*by <a href="/" > doing this after clicking on the logo we go to the homepage*/}
        <img
          src="https://obs.line-scdn.net/0m0339dd5b72513e8a8d6127b836e5ecf1e128f1da5cb7?0"
          alt="food-villa-logo"
        />
      </a>
    </div>
  ); //react element

const Header = () =>{

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="header">
      {" "}
      {/*this "<></>" empty angular brackets known as reaact fragments*/}
      <Title />
      <div className="nav-items">
        <ul>
          <li className="navLi">Home</li>
          <li className="navLi">About</li>
          <li className="navLi">Contact</li>
          <li className="navLi">Cart</li>
        <li> { isLoggedIn? <button onClick={()=>{setIsLoggedIn(false)}} className="loginBtn">Logout</button>:<button className="loginBtn" onClick={()=>{setIsLoggedIn(true)}}>Login</button>}  </li>
        </ul>
      </div>
    </div>
  )
};

export default Header;