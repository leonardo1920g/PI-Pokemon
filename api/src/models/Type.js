const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Type', {
        name: {
            type:DataTypes.STRING,
        },
    },
    { timestamps: false }
    );
};