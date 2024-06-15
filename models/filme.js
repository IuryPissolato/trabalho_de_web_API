'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filme extends Model {
    static associate(models) {
      this.belongsToMany(models.Generos, {
        through: 'filmes_generos',
        foreignKey: 'FilmeId',
        as: 'generos',
        timestamps: false
      });
      this.belongsTo(models.Diretor, {
        as: 'diretor',
        foreignKey: 'id_diretor'
      });
    }
  }

  Filme.init({
    titulo: DataTypes.STRING,
    ano_lancamento: DataTypes.DATEONLY,
    id_diretor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Filme',
    tableName: 'filme'
  });
  return Filme;
};