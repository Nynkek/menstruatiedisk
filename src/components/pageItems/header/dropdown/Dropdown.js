import React from 'react';
import {NavLink} from "react-router-dom";
import "./dropdown.css";

function Dropdown({submenus, dropdown}) {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="dropdown-item">
                    <NavLink to={submenu.url}>{submenu.title}</NavLink>
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;