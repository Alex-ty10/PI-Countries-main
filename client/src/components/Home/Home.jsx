import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index';
import { orderByName, orderByPopulation } from '../../redux/actions';
import CardsHome from '../CardsHome/CardsHome';
import OrderingFilters from '../OrderingFilters/OrderingFilters';
import Pagination from '../Pagination/Pagination'



const Home = () => {
  const dispatch =  useDispatch()
  const countries = useSelector(state => state.countries)
  const [order, setOrder] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage, setCountriesPerPage] = useState(10)
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.slice(indexOfFirstCountry,indexOfLastCountry) 

   const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getAllCountries());
  },[dispatch])

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  }
  const handleOrderingByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordering ${e.target.value}`)
  }
  const handleOrderingByPopulation = (e) => {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordering ${e.target.value}`)
  }
  
  
  return (
    <div className='homePage'>
      
       <button onClick={e => {handleClick(e)}}>
        volver a cargar los paises
      </button> 
      <div>
        <OrderingFilters onChangeName={handleOrderingByName}
                         onChangePopulation={handleOrderingByPopulation}/>

        <CardsHome allCountries={currentCountries}/>

        <Pagination countriesPerPage={countriesPerPage}
                    countries={countries.length}
                    pagination={pagination}
                    />
      </div>
    </div>
  )
}

export default Home;