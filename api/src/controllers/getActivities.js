const { Country, Activity } = require ('../db');

module.exports = async function getActivies() {
  try {
    const data =  await Activity.findAll({
      include:[{
        model: Country,
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