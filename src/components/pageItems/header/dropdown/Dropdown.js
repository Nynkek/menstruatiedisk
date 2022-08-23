import React from 'react';
import {NavLink} from "react-router-dom";
import "./dropdown.css";
import {HashLink, NavHashLink} from "react-router-hash-link";

function Dropdown({submenus, dropdown}) {
    return (
        <>
        {submenus.hashmenu ? (

                <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                    {submenus.submenu.map((submenu, index) => (
                        <li key={index} className="dropdown-item">
                            <HashLink to={submenu.url}>{submenu.title}</HashLink>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                    {submenus.submenu.map((submenu, index) => (
                        <li key={index} className="dropdown-item">
                            <NavLink to={submenu.url}>{submenu.title}</NavLink>
                        </li>
                    ))}
                </ul>

            )

        }

        </>
        );
}

export default Dropdown;