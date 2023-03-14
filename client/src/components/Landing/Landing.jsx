import React from 'react'
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landingPage'>
      <h2 className='tittle'>WELCOME TO MY PROJECT</h2>
      <NavLink className='linkLanding' to='/home'>
        <button>START</button>
      </NavLink>
    </div>
  )
}

export default Landing;