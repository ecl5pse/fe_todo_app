'use strict';
import bcrypt from 'bcrypt';
import {LOGIN_PATTERN} from '../constants';
module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is:LOGIN_PATTERN,
        len: [6, 16],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set(val) {

        this.setDataValue('password', bcrypt.hashSync(val, 10));
      },
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Task, {
      foreignKey: {
        field: 'userId',

      },
      as:'tasks'
    });
    User.belongsToMany(models.Role, {
      through:'UserRoles',
    })
  };


  return User;
};