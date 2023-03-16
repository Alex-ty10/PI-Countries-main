import React, { useEffect } from 'react';
import{ useDispatch, useSelector } from 'react-redux';
import {Link, useParams } from 'react-router-dom';
import { getCountryID } from '../../redux/actions/index';
import './DetailCard.css';

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
      <img src={flag_image} alt={name} className="card-details__image" />
      <h2 className="card-details__title">{name}</h2>
      <div className="card-details__info">
        <p><strong>Continent:</strong> {continent}</p>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Subregion:</strong> {subregion}</p>
        <p><strong>Area:</strong> {area}</p>
        <p><strong>Population:</strong> {population}</p>
        <div className="card-details__activities">
          <h3>Activities:</h3>
          {activities && activities.length > 0 ? (
            <ul>
              {activities.map(activity => (
                <li key={activity.id} className={`card-details__activity card-details__activity--${activity.season}`}>{activity.name}</li>
              ))}
            </ul>
          ) : (
            <p>No activities yet</p>
          )}
        </div>
      </div>
      <Link to='/home'><button className="back-btn">volver</button></Link>
    </div>
  );
}

export default DetailCard;