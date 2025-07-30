import { NavLink } from "react-router-dom";
import "./dropdown.css";
import { HashLink } from "react-router-hash-link";

function Dropdown({ submenus, dropdown }) {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown-item">
          {submenu.url.includes("#") ? (
            <HashLink smooth to={submenu.url}>
              {submenu.title}
            </HashLink>
          ) : (
            <NavLink to={submenu.url}>{submenu.title}</NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
