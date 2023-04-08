const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

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

    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, 
  { timestamps: false }
  );
};
