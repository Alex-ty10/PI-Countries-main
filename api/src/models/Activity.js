const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 1,
        max:5
      }
    },
    duration:{
      type: DataTypes.STRING,
    },
    season:{
      type: DataTypes.ENUM('Spring', 'Summer', 'Winter', 'Autumn'),
      allowNull: false,
    },
  },{
    timestamps: false
  });
};