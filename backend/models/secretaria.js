module.exports = (sequelize, DataTypes) => {
  const Secretaria = sequelize.define('Secretaria', {
    id_secretaria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'secretaria',
    timestamps: false
  });

  return Secretaria;
};
