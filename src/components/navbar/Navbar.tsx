import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import SearchComponent from "../search/Search";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav id='navbar'>
      <div className='container'>
        <Link to='/'>
          <h1>Best Recipes</h1>
        </Link>

        {location.pathname !== "/fav" && <SearchComponent />}
        <Link
          to={`${location.pathname === "/fav" ? "/" : "/fav"}`}
          className={`pill active ${location.pathname === "/fav" && "pill-success"}`}>
          Show Favourites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
