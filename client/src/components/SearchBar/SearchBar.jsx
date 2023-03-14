import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './SearchBar.css'

const SearchBar = () => {
  const [name, setName] =  useState('');
  function handleInputName(e) {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleClickSearch(e){
    setName('')
  };
   
  return (
    <div className='search-bar'>
      <form>
        <input className='search-bar__input'
               type='text'
               value={name}
               onChange={e => handleInputName(e)}
               placeholder='search a country'/>
        <NavLink to={`/search/${name}`}>
          <button className='search-bar__btn' onClick={e => handleClickSearch(e)}>Search</button>
        </NavLink>
      </form>
    </div>
  )
};


export default SearchBar;