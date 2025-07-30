import React from 'react';
import {useLocation} from "react-router-dom";
import {menuItemsList} from './menuItemsList';
import MenuItems from "./MenuItems";


function Nav() {
    let location = useLocation().pathname;

    function getNavClass(location) {
        switch (location) {
            case "":
                return "/nav-home";
            case "/informatie-over-menstruatiedisks":
                return "nav-info";
            case "/diskquiz":
                return "nav-vergelijk";
            case "/contact":
                return "nav-contact";
            default:
                return "nav-home";
        }
    }

    return (
        <div className="nav-container">
            <nav>
                <ul className={getNavClass(location) + " nav-list"}>
                    {menuItemsList.map((menu, index) => {
                        return (
                            <MenuItems items={menu} key={index} />
                        )
                    })}
                </ul>

            </nav>
        </div>
    );
}

export default Nav;