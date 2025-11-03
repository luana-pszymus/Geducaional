module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Turma', {
    id_turma: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    qtd_turmas: DataTypes.INTEGER,
    disciplina: DataTypes.STRING,
    id_professor: DataTypes.INTEGER
  }, { tableName: 'turma', timestamps: false });
};
