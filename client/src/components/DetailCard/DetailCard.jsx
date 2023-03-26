import './DetailCard.css';
import React, { useEffect } from 'react';
import{ useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCountryID } from '../../redux/actions/index';
import back from '../../assets/back.png'

const DetailCard = () => {
  const dispatch = useDispatch();
  const country = useSelector(state => state.country);
  const { name, flag_image, continent, capital, subregion, area, population,activities } = country;
  let { id } = useParams();
  useEffect(() => {
    dispatch(getCountryID(id))
  }, [dispatch, id])
  return (
    <div className="card-details">
      <div className='flag-act'>
      <img src={flag_image} alt={name} className="flag-activities__image" />
      <div className="flag-activities__activities">
          <h3>Activities:</h3>
          {activities && activities.length > 0 ? (
            <ul className='list'>
              {activities.map(activity => (
                <li key={activity.id} className={`card-details__activity card-details__activity--${activity.season}`}>{activity.name}</li>
              ))}
            </ul>
          ) : (
            <p>No activities yet</p>
          )}
        </div>
      </div>
      <div className="card-details__info">
        <h2 className="card-details__title">{name}</h2>
        <p><strong>Continent:</strong> {continent}</p>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Subregion:</strong> {subregion}</p>
        <p><strong>Area:</strong> {area}</p>
        <p><strong>Population:</strong> {population}</p>
        <NavLink to='/home'><button className="back-btn"><img src={back}alt="no image"/></button></NavLink>
      </div>
      
    </div>
  );
}

export default DetailCard;