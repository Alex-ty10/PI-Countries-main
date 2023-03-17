import React from 'react';
import loading from '../../img/loading.gif'
import './Loading.css';


const Loading = () => {
    return(
        <div className='loading'>
          <img src={loading} alt='no image'/>
          <h3>Loading...</h3>
        </div>
    )
};

export default Loading;