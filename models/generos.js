'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Generos extends Model {
    static associate(models) {
      this.belongsToMany(models.Filme, {
        through: 'filmes_generos',
        foreignKey: 'GeneroId',
        as: 'filmes',
        timestamps: false
      })
    }
  }
  Generos.init({
    nome_genero: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Generos',
    tableName: 'generos'
  });
  return Generos;
};