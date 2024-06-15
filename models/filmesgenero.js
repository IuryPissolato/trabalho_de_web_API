'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FilmesGenero extends Model {

  }
  FilmesGenero.init({
    filme_id: DataTypes.INTEGER,
    genero_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FilmesGenero',
    tableName: 'filmes_generos'
  });
  return FilmesGenero;
};