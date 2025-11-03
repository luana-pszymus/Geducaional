const Aluno = require('./aluno');
const Nota = require('./nota');
const Chamada = require('./chamada');
const AlunosDaTurma = require('./alunosDaTurma');

// Aqui você pode criar relações, exemplo:
// Aluno.hasMany(Nota, { foreignKey: 'aluno' });
// Nota.belongsTo(Aluno, { foreignKey: 'aluno' });

module.exports = {
  Aluno,
  Nota,
  Chamada,
  AlunosDaTurma
};
