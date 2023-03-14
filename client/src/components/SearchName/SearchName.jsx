import './SearchName.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCountryName } from "../../redux/actions"
import { useParams } from 'react-router-dom';;


function SearchName() {
    const dispatch = useDispatch()
    const country = useSelector(state => state.country)
    const { name } = useParams();

    useEffect(() => {
        dispatch(getCountryName(name))
    }, [dispatch, name])
    
    console.log('esta aqui'+ country.name)

    return(
        <div>
            <div>
                <h1 className="title-search">results for "{name}"</h1>
            </div>
            <div>
            <div className="card-details">
      <img src={country.flag_image} alt={name} className="card-details__image" />
      <h2 className="card-details__title">{country.name}</h2>
      <div className="card-details__info">
        <p><strong>Continent:</strong> {country.continent}</p>
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Subregion:</strong> {country.subregion}</p>
        <p><strong>Area:</strong> {country.area}</p>
        <p><strong>Population:</strong> {country.population}</p>
        <div className="card-details__activities">
          <h3>Activities:</h3>
          <ul>
            {country.activities?.map(activity => (
              <li key={activity.id} className={`card-details__activity card-details__activity--${activity.season}`}>{activity.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
};

export default SearchName;