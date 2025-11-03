const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Aluno extends Model {}

Aluno.init({
  id_aluno: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome_aluno: DataTypes.STRING,
  ra_aluno: DataTypes.STRING,
  cpf_aluno: DataTypes.STRING,
  email_aluno: DataTypes.STRING,
  password_aluno: DataTypes.STRING,
  id_setor: DataTypes.INTEGER,
  aluno_ativo: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Aluno',
  tableName: 'aluno',
  timestamps: false
});

module.exports = Aluno;
