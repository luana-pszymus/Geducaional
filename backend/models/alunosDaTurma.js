const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class AlunosDaTurma extends Model {}

AlunosDaTurma.init({
  id_aluno_turma: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id_aluno: DataTypes.INTEGER,
  nome_aluno: DataTypes.STRING,
  id_turma: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'AlunosDaTurma',
  tableName: 'alunos_da_turma',
  timestamps: false
});

module.exports = AlunosDaTurma;
