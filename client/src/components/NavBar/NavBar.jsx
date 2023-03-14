import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
//import logo from '../../assets/logo.png'
import './NavBar.css'

function NavBar(params) {
    return(
        <div className="navbar-container">
                {/* <div className="logo">
                    <NavLink to='/'>
                        <img src={logo} alt="Logo" height='70px'/>
                    </NavLink>
                </div> */}
            
                <div className="links">
                    <div>
                        <NavLink className="link" to='/home'>
                            <div className="linkToHome">Inicio</div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className="link" to='/create'>
                            <div className="linkToCreate">Create a activity</div>
                        </NavLink>
                    </div>
                    <div className="searchBar">
                        <SearchBar/>
                    </div>
                </div>
        </div>
    )
};

export default NavBar;