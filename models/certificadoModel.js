const { Sequelize } = require("sequelize");
const database = require("./sequelize");

const Certificado = database.define(
  "certificado",
  {
    id_certificado: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    aluno: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    curso: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    data_emissao: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
  },
  {
    tableName: "certificado",
    timestamps: false,
  }
);

module.exports = Certificado;
