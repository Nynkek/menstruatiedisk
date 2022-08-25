import React from 'react';
import {NavLink} from "react-router-dom";
import "./dropdown.css";
import {NavHashLink} from 'react-router-hash-link';


function Dropdown({submenus, dropdown}) {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="dropdown-item">
                    {(submenu.url.includes("#")) ? (
                            <NavLink to={submenu.url}>{submenu.title}</NavLink>
                        )
                        :
                        (
                            <NavLink to={submenu.url}>{submenu.title}</NavLink>)}
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;


