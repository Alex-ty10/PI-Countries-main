const { Country, Activity } = require ('../db');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports =  async function getCountryByName(name){
  try {
    const data = await Country.findAll({
      where: {
        name:{
          [op.iLike]: `%${name}%`
        }
      },
      include: [{
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