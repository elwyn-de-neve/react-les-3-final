import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";

function Nav( { auth, setAuth } ) {
    // Links aanpassen naar <Link> of <NavLink> componenten:
    // 1. Importeer Link en NavLink
    // 2. Vervang de anchor links door Link en NavLink componenten

    // Auth toevoegen aan de navigatie:
    // 1. Importeer useState van react
    // 2. Maak een const aan met de naam auth en gebruik de useState() hook
    // 3. Geef de useState() hook een beginwaarde mee van false
    // 4. Gebruik de setAuth() functie om de auth te veranderen

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    { auth && <li><Link to="/profile">Profile</Link></li> }
                </ul>
                <button type="button" onClick={ () => setAuth( prev => !prev ) }>Toggle Auth</button>
            </nav>
            <hr/>
        </>
    );
}

export default Nav;