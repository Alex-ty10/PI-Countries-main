const { Router } = require('express');
const router = Router();
const getCountries = require ('../controllers/getCountries');
const getCountryById = require ('../controllers/getCountryById');
const getCountryByName = require ('../controllers/getCountryByName');

router.get('/', async (req, res, next) => {
  try {
    const { name } = req.query;
    const countries = await getCountries();

    if(!name) return res.status(200).json(countries);

    const countryName =  await getCountryByName(name);
    return res.status(200).json(countryName)
  } catch (e) {
    return next(e)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryId = await getCountryById(id);
    return res.status(200).json(countryId)
  } catch (e) {
    return next(e)
  }
});

module.exports = router;