import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName={"active"}>Home</NavLink>
            </li>
            <li>
              <NavLink exact to="/charts" activeClassName={"active"}>Charts</NavLink>
            </li>
          </ul>
        </nav>
      </div>   
    )
}

export default Navbar;