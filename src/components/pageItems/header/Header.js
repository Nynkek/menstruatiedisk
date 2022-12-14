import React from 'react';
import logo from '../../../assets/logos/menstruatiedisk-logo-rood.png';
import Nav from "./nav/Nav";
import {useNavigate, Link} from 'react-router-dom';
import "./header.css";


function Header({headerImage, pageTitle}) {
    const history = useNavigate();

    const toLink = (e) => {
        e.preventDefault();
        history("/doneren");
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/"><figure><img src={logo} alt="menstruatiedisk logo" className="logo"/></figure></Link>
                </div>
                <div className="-btn">
                    <button type="button" onClick={toLink}><span className="btn-text">Doneer!</span></button>
                </div>
            </header>
            <Nav/>
            <div className="header-img-container">
                <figure>
                    <img src={headerImage} className="header-img" alt="menstruatiedisk header afbeelding"/>
                </figure>
                <div className="page-title">
                    <h1>{pageTitle}</h1>
                </div>

            </div>
        </>
    );
}

export default Header;