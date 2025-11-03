const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Chamada extends Model {}

Chamada.init({
  id_cadastro: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_aluno: DataTypes.INTEGER,
  aluno_presente: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Chamada',
  tableName: 'chamada',
  timestamps: false
});

module.exports = Chamada;
