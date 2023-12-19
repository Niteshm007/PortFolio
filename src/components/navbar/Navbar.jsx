import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { links } from "../../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="nav">
      <div className={`${showMenu ? "nav_menu show_menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <i className="nav_item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav_link active-nav" : "nav_link"
                  }
                  onClick={()=> setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              </i>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav_toggle animate_toggle" : "nav_toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
