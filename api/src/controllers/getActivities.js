const { Country, Activity } = require ('../db');

const getActivities = async() => {
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

const deletetActivities = async(name) => {
  const activity = await Activity.findOne({ where:{name}});
  await activity.destroy();
};


module.exports={getActivities, deletetActivities };