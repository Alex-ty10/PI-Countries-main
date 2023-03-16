import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountryName } from "../../redux/actions";
import './SearchBar.css'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [name, setName] =  useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  function handleClick(e){
    e.preventDefault()
    if(name){
      dispatch(getCountryName(name))
      setName('')
    }
  };
   
  return (
    <div className='search-bar'>
      <form>
        <input className='search-bar__input'
               type='text'
               value={name}
               onChange={e => handleOnChange(e)}
               placeholder='search a country'/>
        <NavLink to={`/search/${name}`}>
          <button className='search-bar__btn' onClick={e => handleClick(e)}>Search</button>
        </NavLink>
      </form>
    </div>
  )
};


export default SearchBar;