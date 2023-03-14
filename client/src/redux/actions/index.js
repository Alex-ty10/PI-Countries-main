import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'
export const GET_COUNTRY_ID = 'GET_COUNTRY_ID'
export const GET_COUNTRY_NAME = 'GET_COUNTRY_NAME'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES'
export const FILTER_BY_CONTINENT = 'FILTER_CONTINENT'

const RUTA_COUNTRIES = 'http://localhost:3001/countries'
const RUTA_ACTIVITIES = 'http://localhost:3001/activities'

export function getAllCountries(){
  return async function(dispatch) {
    try {
      let response = await axios.get(`${RUTA_COUNTRIES}`)
      dispatch({
        type: GET_ALL_COUNTRIES,
        payload: response.data
      })
    } catch (e) {
      alert ('I cant get all the countries',e.message)
    }
  }
};

export function getCountryID(id){
  return async function(dispatch) {
    try {
      let response = await axios.get(`${RUTA_COUNTRIES}/${id}`)
      const countryID = response.data
      return dispatch({
        type: GET_COUNTRY_ID,
        payload: countryID
      })
    } catch (e) {
      alert ('I cant get that country',e.message)
    }
  }
};

export function getCountryName(name){
  return async function(dispatch) {
    try {
      let response = await axios.get(`${RUTA_COUNTRIES}?name=${name}`)
      const countryName = response.data
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: countryName
      })
    } catch (e) {
      alert ('I cant get that country',e.message)
    }
  }
};

export function createActivity(payload){
  return async function(dispatch) {
    
      let response = await axios.post(`${RUTA_ACTIVITIES}}`,payload)
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: response
      })
   
  }
};

export function getAllActivities(){
  return async function(dispatch) {
    try {
      let response = await axios.get(`${RUTA_ACTIVITIES}`)
      const allActivities = response.data
      return dispatch({
        type: GET_ALL_ACTIVITIES,
        payload: allActivities
      })
    } catch (e) {
      alert ('I cant get all the countries',e.message)
    }
  }
};

export function orderByName(payload) {
   return function(dispatch) {
    return dispatch({type: ORDER_BY_NAME, payload})
   }
};

export function orderByPopulation(payload) {
  return function(dispatch) {
   return dispatch({type: ORDER_BY_POPULATION, payload})
  }
};

export function filterByActivities(payload) {
  return function(dispatch) {
   return dispatch({type: FILTER_BY_ACTIVITIES, payload})
  }
};

export function filterByContinent(payload) {
  return function(dispatch) {
   return dispatch({type: FILTER_BY_CONTINENT, payload})
  }
};