import './Landing.css'
import React from 'react'
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landingPage'>
      <h1 className='tittle-landing'>WELCOME TO MY PROJECT!</h1>
      <NavLink to='/home'>
        <button className='linkLanding'>Let's get started</button>
      </NavLink>
    </div>
  )
}

export default Landing;
