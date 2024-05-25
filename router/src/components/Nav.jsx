 import { Link, NavLink } from "react-router-dom";

import React from "react";
const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>{/*burada link değil a kullanılsa her defasında servera istek ata r */}
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>{/*Navlink ise tıklanıldığında gösteriyor */}
      </li>
    </ul>
  );
};

export default Nav;
