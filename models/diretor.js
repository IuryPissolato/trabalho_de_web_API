'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diretor extends Model {
    static associate(models) {
      this.hasMany(models.Filme, {
        as: 'filme',
        foreignKey: 'id_diretor'
      });
    }
  }
  Diretor.init({
    nome: DataTypes.STRING,
    ano_nascimento: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Diretor',
    tableName: 'diretor'
  });
  return Diretor;
};