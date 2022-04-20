import { NavLink } from "react-router-dom";

const NavLinks = ({ route, text }) => {
  return (
    <>
      <li className='navbar__container-menu_items'>
        <NavLink
          to={route}
          className={({ isActive }) =>
            isActive
              ? "navbar__container-menu_items-links active"
              : "navbar__container-menu_items-links inactive"
          }>
          {text}
        </NavLink>
      </li>
    </>
  );
};

export { NavLinks };
