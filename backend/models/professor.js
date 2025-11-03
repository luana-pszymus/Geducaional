module.exports = (sequelize, DataTypes) => {
  const Professor = sequelize.define('Professor', {
    id_professor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    cpf_professor: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    nome_professor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_professor: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    senha_professor: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    turma: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_secretaria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    materia: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'professor',
    timestamps: false
  });

  return Professor;
};
