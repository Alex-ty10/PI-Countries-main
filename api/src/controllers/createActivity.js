const { Country, Activity } = require ('../db');

module.exports = async function createActivity(name, difficulty, duration, season, countries) {
  try {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    const countryAct = await Country.findAll({
      where: {
        name: countries
      }
    });

    newActivity.addCountry(countryAct);

  } catch (e) {
    console.log('error createActivity' + e)
    return e
  }
}

