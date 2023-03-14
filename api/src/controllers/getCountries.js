const axios = require ('axios');
const { Country, Activity } = require ('../db')

module.exports = async function getCountries() {
  //traigo los data de la Db
  let countriesDb = await Country.findAll({
    include: [{
      model: Activity,
      attributes: [ 'name', 'difficulty', 'duration', 'season'],
      through:{
        attributes: {exclude: ['createdAt', 'updatedAt']}
      }
    }]
  })
  try {
    //pregunto si hay data en db, si no hay la traigo de la api
    if(countriesDb.length === 0){
      const { data } = await axios.get('https://restcountries.com/v3/all');
      //console.log(data)
    const countries =  data.map(c => {
      return {
        name: c.name.common,
        id: c.cca3,
        flag_image: c.flags[1],
        continent: c.continents[0],
        capital: c.capital ? c.capital[0] : 'None',
        subregion: c.subregion ? c.subregion : 'None',
        area: c.area,
        population: c.population
      };
    });
    //creo los datos en la Db
    countries.forEach(c => {
      Country.findOrCreate({
        where: {id: c.id},
        defaults: {
          name: c.name,
          id: c.id,
          flag_image: c.flag_image,
          continent: c.continent,
          capital: c.capital,
          subregion: c.subregion,
          area: c.area,
          population: c.population
        }
      })
    });
    //traigo de nuevo la data de Bb
    countriesDb = await Country.findAll({
      include: [{
        model: Activity,
        attributes: [ 'name', 'difficulty', 'duration', 'season'],
        through:{
          attributes: {exclude: ['createdAt', 'updatedAt']}
        }
      }]
    })

    }
    console.log(countriesDb.length + ' Todo funcionando')
    return countriesDb
  } catch (e) {
    return next(e)
  }
};