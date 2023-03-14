import React from "react";
import './Pagination.css'


const Pagination  = ({ countriesPerPage, countries, pagination}) => {
  const pageNumbers = []

  for (let i = 0; i < Math.ceil(countries/countriesPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return(
    <nav>
      <ul className='paginado'>
        {pageNumbers && pageNumbers.map(number => {
          return (
            <li className='number' key={number}>
            <a onClick={() => pagination(number)}>{number}</a>
          </li>
          )
        })}
      </ul>
    </nav>
  )

}

export default Pagination;