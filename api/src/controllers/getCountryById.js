const { Country, Activity } = require ('../db');

module.exports = async function getCountryById(id) {
try {
  const data = await Country.findOne({
    where: {id: id},
    include:[{
      model: Activity,
      attributes: ['name'],
      through:{
        attributes: {exclude: ['createdAt', 'updatedAt']}
      }
    }]
  });
  return data;
} catch (e) {
  return next(e)
}
};