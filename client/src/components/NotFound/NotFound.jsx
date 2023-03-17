import React from 'react';
import nofound from '../../img/nofound.jpg'
import './NotFound.css';


const NotFound = () => {
    return(
        <div className='notfound'>
          <img src={nofound} alt='no image'/>
          <h2>Try clearing filters and go Home</h2>
        </div>
    )
};

export default NotFound;