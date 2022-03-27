import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__container-menu">
          <li className={`navbar__container-menu_items`}>
            <NavLink
              to="/"
              className="navbar__container-menu_items-links"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#1797ff" : "#606060",
                  border: isActive
                    ? "solid 0.15rem #1797ff"
                    : "solid 0.15rem #d6d6d6",
                };
              }}
            >
              All
            </NavLink>
          </li>

          <li className="navbar__container-menu_items">
            <NavLink
              to="/fav"
              className="navbar__container-menu_items-links"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#1797ff" : "#606060",
                  border: isActive
                    ? "solid 0.15rem #1797ff"
                    : "solid 0.15rem #d6d6d6",
                };
              }}
            >
              My Faves
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
