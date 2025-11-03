module.exports = (sequelize, DataTypes) => {
  const Setor = sequelize.define('Setor', {
    id_setor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome_setor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'setor',
    timestamps: false
  });

  return Setor;
};
