'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    user_id: DataTypes.INTEGER,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    distance: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    hair_color: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    status: DataTypes.STRING,
    pets: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    about: DataTypes.STRING,
    occupation: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Profile.belongsTo(models.User, {
          foreignKey: "user_id"
        });
      }
    }
  });
  return Profile;
};