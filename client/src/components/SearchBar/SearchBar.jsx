import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCountryName } from "../../redux/actions";
import lupa from '../../img/lupasearch.png'
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
    <div>
      <form className='search-bar'>
        <input className='search-bar__input'
               type='text'
               value={name}
               onChange={e => handleOnChange(e)}
               placeholder='Search a country'/>
        <NavLink to={`/search/${name}`}>
          <button className='search-bar__btn' onClick={e => handleClick(e)}><img src={lupa}alt="no image"></img></button>
        </NavLink>
      </form>
    </div>
  )
};


export default SearchBar;