import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, filterByActivities, filterByContinent } from '../../redux/actions';
import {useHistory} from 'react-router'


const OrderingFilters = ({ onChangeName, onChangePopulation }) => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);
  const countries =  useSelector(state => state.countries);
  
  const continents = () => {
    let continentData = countries.map(c => c.continent)
    let continents = continentData.filter((continent, index) => {
      return continentData.indexOf(continent) === index;
    });
    return continents
  }

  useEffect(() => {
    dispatch(getAllActivities())
  },[dispatch])

  const handleFilterByActivities = (e) => {
    dispatch(filterByActivities(e.target.value))
  }
  const handleFilterByContinent = (e) => {
    dispatch(filterByContinent(e.target.value))
  }

  const handlerClearFilter = () => {
    history.go(0);
};


  return ( 
    <div className='container'>
      <select defaultValue='default' className='ordering-name' onChange={onChangeName}>
        <option hidden value='default'>Order By Name</option>
        <option value='A - Z'>A - Z</option>
        <option value='Z - A'>Z - A</option>
      </select>

      <select defaultValue='default' className='ordering-population' onChange={onChangePopulation}>
        <option hidden value='default'>Order By Population</option>
        <option value='More'>Most to least populated</option>
        <option value='Less'>Least to most populated</option>
      </select>

      <select defaultValue='default' className='filter-activities' onChange={handleFilterByActivities}>
        <option hidden value='default'>Filter By Activities</option>
        <option value='All'>All activities</option>
        {activities.map(a => (
          <option key={a.id} value={a.name}>{a.name}</option>
        ))}
      </select>

      <select defaultValue='default' className='filter-continent' onChange={handleFilterByContinent}>
        <option hidden value='default'>Filter By Continent</option>
        {continents().map(continent => (
        <option key={continent} value={continent}>{continent}</option>
        ))}
      </select>

      <button className='button' onClick={handlerClearFilter}>Clear Filters</button>

    </div>
  );
};

export default OrderingFilters