const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Nota extends Model {}

Nota.init({
  id_nota: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  aluno: DataTypes.INTEGER,
  avaliacao: DataTypes.STRING,
  valor_nota: DataTypes.FLOAT
}, {
  sequelize,
  modelName: 'Nota',
  tableName: 'nota',
  timestamps: false
});

module.exports = Nota;
