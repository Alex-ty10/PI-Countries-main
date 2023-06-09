const { Router } = require('express');
const router = Router();
const { deletetActivities } = require('../controllers/getActivities');
const { getActivities } =  require('../controllers/getActivities');
const createActivity =  require('../controllers/createActivity');

router.get('/', async (req, res, next) => {
  try {
    const { name } = req.query
    const activities = await getActivities();
    if(!name) return res.status(200).json(activities);
    const activityName = await deletetActivities(name);
    return res.status(200).send('the activity has been deleted')
  } catch (e) {
    return next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, difficulty, duration, season, countries } = req.body;
    if ( !name || !difficulty || !season || !countries) {
      return res.status(404).send('Missing data')
    }
    if(difficulty > 5 || difficulty < 1){
      return res.status(404).send(`The difficulty ${difficulty} is not allowed`)
    }
    if (!(season === 'Winter' || season === 'Summer' || season === 'Spring' || season === 'Autumn')){
      return res.status(404).send(`The season ${season} is not allowed`)
    }
    createAct = await createActivity(name, difficulty, duration, season, countries);
    return res.status(200).send(`The Activity ${name} was created successfully`)

  } catch (e) {
    return res.status(404).send(e.menssage)
  }
});


module.exports = router;