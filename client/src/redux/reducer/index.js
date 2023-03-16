import {
  GET_ALL_COUNTRIES,
  GET_COUNTRY_ID,
  GET_COUNTRY_NAME,
  CREATE_ACTIVITY,
  GET_ALL_ACTIVITIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_BY_ACTIVITIES,
  FILTER_BY_CONTINENT
} from '../actions/index';

const inicialState = {
  allCountries: [],
  countries: [],
  country: [],
  activities: [],
}

function rootReducer(state = inicialState, action){

  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };

      case GET_COUNTRY_ID:
        return{
          ...state,//copia estado importante no olvidar
          country: action.payload
        };

        case GET_COUNTRY_NAME:
        return{
          ...state,
          countries: action.payload
        };

        case CREATE_ACTIVITY:
        return{
          ...state,
        };

        case GET_ALL_ACTIVITIES:
        return{
          ...state,
          activities: action.payload
        };

        case ORDER_BY_NAME:
          const orderingName = action.payload === 'A - Z' ?
          state.countries.sort((a ,b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
            if(b.name.toLowerCase() > a.name.toLowerCase()) return -1
            return 0
          })
          :
          state.countries.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
            if(b.name.toLowerCase() > a.name.toLowerCase()) return 1
            return 0
          })
          return {
            ...state,
            countries: orderingName,
          };
          

        case FILTER_BY_ACTIVITIES:
          const allCountries = state.allCountries;
          const filterCountry = action.payload === 'All' ? allCountries.filter(c => c.activities.length > 0)
          : allCountries.filter(c => c.activities.find(a => a.name === action.payload))
        return{
          ...state,
          countries: filterCountry
        };

        case ORDER_BY_POPULATION:
          const orderingPopulation = action.payload === 'More' ?
          state.countries.sort((a, b) => Number(b.population) - Number(a.population))
          :
          state.countries.sort((a, b) => Number(a.population) - Number(b.population))
          return{
            ...state,
            countries: orderingPopulation
          };
        

        case FILTER_BY_CONTINENT:
          const allCountries2 = state.allCountries
          const filterCountry2 = action.payload === 'All' ? allCountries2
          : allCountries2.filter(c => c.continent === action.payload)
        return{
          ...state,
          countries: filterCountry2
        };
  
    default: return state
    
  }
}

export default rootReducer