const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    speed: {
      type:DataTypes.INTEGER,
      allowNull: true,
    },

    height: {
      type:DataTypes.INTEGER,
      allowNull: true,
    },

    weight: {
      type:DataTypes.INTEGER,
      allowNull: true,
    },

    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, 
  { timestamps: false }
  );
};
