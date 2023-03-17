import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index';
import { orderByName, orderByPopulation } from '../../redux/actions';
import CardsHome from '../CardsHome/CardsHome';
import OrderingFilters from '../OrderingFilters/OrderingFilters';
import Pagination from '../Pagination/Pagination'
import Loading from '../Loading/Loading';



const Home = () => {
  const dispatch =  useDispatch()
  const countries = useSelector(state => state.countries)
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  },[dispatch])

  //prueba loading
  /* useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getAllCountries());
      setIsLoading(false);
    }, 000);
  
    return () => clearTimeout(timer);
  }, [dispatch]); */

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
    <div className='home-page'>
      {isLoading ? <Loading /> 
      : <div>
          <OrderingFilters onChangeName={handleOrderingByName}
                         onChangePopulation={handleOrderingByPopulation}/>

          <CardsHome allCountries={currentCountries}/>

          <Pagination countriesPerPage={countriesPerPage}
                      countries={countries.length}
                      pagination={pagination}
                      />
        </div>}
    </div>
  )
}

export default Home;