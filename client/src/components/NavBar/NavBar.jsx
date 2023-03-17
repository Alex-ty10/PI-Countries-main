import React from "react";
import { NavLink } from 'react-router-dom';
import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css'

function NavBar() {
    return(
    <div className="navbar-container">
                
     <div className="nav">
         <div>
            <NavLink to='/'><button className="btnhenry">Henry Countries</button></NavLink>
        </div>
        
        <div className="container-link">
        <div className="link">
             <NavLink to='/home'>
                    <div className="div-link">Home</div>
              </NavLink>
         </div>

          <div>
                <NavLink to='/create'>
                      <div className="div-link">Create a activity</div>
                  </NavLink>
         </div>

         <div className="search-bar">
                <SearchBar/>
        </div>
        </div>
                    
     </div>
    </div>
    )
};

export default NavBar;