import React, {useState} from 'react';
import Dropdown from '../dropdown/Dropdown'
import {NavLink} from "react-router-dom";

function MenuItems({items}) {
    const [dropdown, toggleDropdown] = useState(false);


    return (
        <li className="menu-items">
            {(items.submenu || items.hashmenu) ? (
            <>
            <NavLink to={items.url} end
                     className={(navData) => navData.isActive ? "active-link" : ""} role="button"
                     aria-expanded={dropdown ? "true" : "false"}
                     onClick={() => toggleDropdown((prev) => !prev)}
            >
                {items.title}
            </NavLink>
            <Dropdown submenus={items} dropdown={dropdown}/>
            </>
            ) : (

                <NavLink to={items.url} end
                         className={(navData) => navData.isActive ? "active-link" : ""} role="button"
                >
                    {items.title}
                </NavLink>
            )}
        </li>
    );
}

export default MenuItems;