import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCountries, createActivity } from '../../redux/actions';

const validate = (input) => {
  let errors = {};
  if (!input.name.trim()) errors.name = 'Add a name';

  if (input.difficulty > 5 || input.difficulty < 1) errors.difficulty = 'Add a valid difficulty';

  if (input.duration < 1 || input.duration > 24) errors.duration = 'Add a valid duration';

  if (!input.season) errors.season = 'Select a season';

  if (input.countries.length === 0) errors.countries = 'Select at least one country';

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: '',
    difficulty: 0,
    duration: '',
    season: '',
    countries: []
  });

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        season: e.target.value
      });
    }
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(error).length === 0) {
      dispatch(createActivity(input));
      alert('The activity has been created successfully!!');
      setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [],
      });
    }
  };
  return(
    <div>
      <NavLink to='/home'><button className="back-btn">volver</button></NavLink>
      <h1>create your activity!!</h1>

      
      <form onSubmit={e => handleSubmit(e)}>

      <div className="form-input">
      <label className='form-label'>Name</label>
          <input type='text'
                 value={input.name}
                 name='name'
                 onChange={handleChange}/>
           {
                  error.name && (
                      <p>{error.name}</p>
                  )
              }
      </div>

      <div className="form-input">
      <label className='form-label'>Difficulty</label>
          <input type='text'
                 value={input.difficulty}
                 name='difficulty'
                 onChange={handleChange}/>
          {
                  error.difficulty && (
                      <p>{error.difficulty}</p>
                  )
              }
      </div>

      <div className="form-input">
      <label className='form-label'>Duration</label>
          <input type='text'
                 value={input.duration}
                 name='duration'
                 onChange={handleChange}/>
          {
                 error.duration && (
                     <p>{error.duration}</p>
                 )
             }
      </div>

      <div className="form-input">
          <label>Season</label>
          <select>
          <option type='checkbox' value='spring' name='spring' onChange={e => handleCheck(e)}>Spring</option>
          <option type='checkbox' value='summer' name='summer' onChange={e => handleCheck(e)}>Summer</option>
          <option type='checkbox' value='autumn' name='autumn' onChange={e => handleCheck(e)}>Autumn</option>
          <option type='checkbox' value='winter' name='winter' onChange={e => handleCheck(e)}>Winter</option>
          </select>
          
       </div>

       <select onChange={e => handleSelect(e)}>{
               countries.map((a) => (
                   <option value={a.name}>{a.name}</option>
               ))
           }
       </select>

       <div>
           {
               input.countries.join(', ')
           }
       </div>

       <div>
        {
         error.name || !input.difficulty || !input.duration || !input.countries?
            <button type="submit" disabled={true}>Create Activity</button> :
             <button type="submit" disabled={false}>Create Activity</button>
        }

    </div>
      </form>
     
    </div>
  )
 }

 export default Form;