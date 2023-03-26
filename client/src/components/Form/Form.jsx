import './Form.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getAllCountries, createActivity, getAllActivities, orderByName } from '../../redux/actions';
import back from '../../assets/back.png' 


//validar los inputs del formulario
const validate = (input, activities) => {
  let errors = {};

  //validacion de name
  if (!input.name.trim()) {errors.name = 'Add a name';}
  if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {errors.name = 'Name can only contain letters'}
  if (activities.includes(input.name.trim())) {errors.name = 'This activity already exists'}

  //validacion de difficulty
  if(!input.difficulty) {errors.difficulty = 'Add a difficulty'}
  if(isNaN(input.difficulty)) {errors.difficulty = 'No letters allowed'}
  if (input.difficulty > 5 || input.difficulty < 1) {errors.difficulty = 'Add a valid difficulty'}
  
  //validacion de duration
  if (input.duration < 1 || input.duration > 24) {errors.duration = 'Add a valid duration'};

  //validacion de season
  if (!input.season) {errors.season = 'Select a season'};

  //validacion de countries
  if(!input.countries.length) {errors.countries = 'Select a country'}

  return errors;
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector(state => state.countries);
  const activities = useSelector(state => state.activities)

  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
    const timer = setTimeout(() => {
      dispatch(orderByName('A - Z'));
    }, 1000);

    return () => clearTimeout(timer);
  },[dispatch])


  const [input, setInput] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });

  const activitiesCheck = activities.map(a => a.name);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(validate({
      ...input,
      [e.target.name]: e.target.value,
    },activitiesCheck));
  };

  const handleCheck = (e) => {
    if (e.target.value) {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    }
    setError(validate({
      ...input,
      [e.target.name]: e.target.value,
    },activitiesCheck));
  };

  const handleSelect = (e) => {
    const selectedCountry = e.target.value;
    
    // Si el país ya está en el array, no se agrega de nuevo
    if (!input.countries.includes(selectedCountry)) {
      setInput({
        ...input,
        countries: [...input.countries, selectedCountry]
      });

      setError(validate({
        ...input,
        countries: [...input.countries, selectedCountry]
      },activitiesCheck));
    } 
  };

  const handleDelete = (country) => {
    setInput({
      ...input,
      countries: input.countries.filter(c => c !== country)
    })
    setError(validate({
      ...input,
      countries: input.countries.filter(c => c !== country)
    },activitiesCheck));
  }

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
      history.push('/home')
    } else{
      alert('please complete the options')
    }
  };
  return(
    <div>
      
      <h1 className='tittle'>Create your activity!!</h1>

      <div className='container-form'>
      <form onSubmit={handleSubmit}>

          <div className="form-input">
          <label className='form-label'>Name: </label>
              <input type='text'
                    value={input.name}
                    name='name'
                    autoComplete='off'
                    placeholder='Activity name'
                    onChange={handleChange}/>
              {
                      error.name && (
                          <p>{error.name}</p>
                      )
                  }
          </div>

          <div className="form-input">
          <label className='form-label'>Difficulty: </label>
              <input type='text'
                    value={input.difficulty}
                    name='difficulty'
                    autoComplete='off'
                    placeholder='Difficulty 1 - 5'
                    onChange={handleChange}/>
              {
                      error.difficulty && (
                          <p>{error.difficulty}</p>
                      )
                  }
          </div>

          <div className='form-input'>
          <label className='form-label'>Duration: </label>
              <input type='text'
                    value={input.duration}
                    name='duration'
                    autoComplete='off'
                    placeholder=' Hours'
                    onChange={handleChange}/>
              {
                    error.duration && (
                        <p>{error.duration}</p>
                    )
                }
          </div>

          <div className='form-input'>
              <label className='form-label'>Season: </label>
              <select name='season' onChange={handleCheck}>
              <option hidden value='default'>Select</option>
              <option type='checkBox' value='Spring' name='Spring'>Spring</option>
              <option type='checkBox' value='Summer' name='Summer'>Summer</option>
              <option type='checkBox' value='Autumn' name='Autumn'>Autumn</option>
              <option type='checkBox' value='Winter' name='Winter'>Winter</option>
              </select>
              
              
            

              {
                    error.season && (
                        <p>{error.season}</p>
                    )
                }
          </div>

          <div className='form-input'>
          <label className='form-label'>Countries: </label>
          <select name='countries' onChange={handleSelect}>
          <option hidden value='default'>Select the country</option>
          {countries.map(a => (
              <option key={a.name}value={a.name}>{a.name}</option>
              ))}
          </select>
          {
                    error.countries && (
                        <p>{error.countries}</p>
                    )
                }
          <div className='countries-select'>
            {input.countries.map((country, index) => (
              <div className='form-countries__delete' key={index}>
                {country}
                <button onClick={() => handleDelete(country)}>x</button>
              </div>
            ))}
          </div>
          </div>
          

          <div >
            {
            error.name || !input.difficulty || !input.duration || !input.countries?
                <button type="submit" className='btn' disabled={true}>Create Activity</button> :
                <button type="submit" className='btn' disabled={false}>Create Activity</button>
            }

          </div>
          </form>

          <NavLink to='/home'><button className="btn"><img src={back}alt="no image"/></button></NavLink>
      </div>
      
     
    </div>
  )
 }

 export default Form;