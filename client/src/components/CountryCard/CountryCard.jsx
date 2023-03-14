import React from 'react'
import { NavLink } from 'react-router-dom'
import './CountryCard.css'

const CountryCard = ({ id, name, flag_image, continent, activities }) => {
  return (
    <NavLink className='container-country' to={`/countries/${id}`}>
      <div className='container-country__card' key={id}>
        <img className='container-country__Flag' src={flag_image} alt='HAY QUE BUSCAR'/>
        <div className='container-country__cardtext'>
          <p className='container-country__Title'>{name}</p>
          <p className='container-country__text'>Continent: {continent}</p>
          {activities && activities.length > 0 && (
            <ul>
              Activities: {activities?.map(a => {
                return(
                  <li key={a.id}>{a.name}</li>
                )
              })} 
            </ul>
          )}
        </div>
      </div>
    </NavLink>
  )
}

export default CountryCard;
